# 07 — Seguridad, Privacidad y Gobernanza de Datos

> **Documento:** `GeminiAudits/07_SEGURIDAD_PRIVACIDAD_Y_GOBERNANZA_DE_DATOS.md`  
> **Objetivo:** Auditoría de soberanía de datos, cifrado en reposo para información biomédica y psicológica, gestión de secretos, políticas de sincronización y prevención de fugas de privacidad.

---

## 1. El Reto de Privacidad de un Segundo Cerebro Total

Un Segundo Cerebro que gestiona desde postulaciones laborales hasta registros de dolor articular, fatiga por TDAH, salud sexual y métricas corporales maneja datos que bajo regulaciones internacionales (como el **Reglamento General de Protección de Datos de la UE - GDPR, Artículo 9** y la ley estadounidense **HIPAA**) se clasifican como **Categorías Especiales de Datos de Máxima Sensibilidad**.

Si estos datos se enviaran en texto plano a servidores de terceros o a modelos de IA en la nube, el usuario quedaría expuesto a:
1. **Perfilado invasivo y pérdida de privacidad.**
2. **Filtración de condiciones de neurodesarrollo o dolor físico a reclutadores o empleadores.**
3. **Exposición accidental en repositorios públicos de GitHub.**

---

## 2. Auditoría del Repositorio Actual: Hallazgos y Riesgos

### 2.1 Hallazgos Positivos Verificados
*   **Enfoque Local-First Nativo:** El 100% de la lógica operativa corre en el navegador mediante IndexedDB / LocalStorage. La aplicación no cuenta con un backend centralizado que almacene la base de datos de usuarios.
*   **Política de Sincronización Declarada (`syncPolicy.ts`):** Ya existe un módulo en `src/lib/security/syncPolicy.ts` que clasifica los datos en niveles de confidencialidad antes de permitir su exportación o sincronización con Notion o Google Sheets.
*   **Gestión de Secretos en `.env`:** El archivo `.env` está en `.gitignore` y las claves de API (`GEMINI_API_KEY`) no se encuentran hardcodeadas en los componentes de frontend de Astro/React.

### 2.2 Vulnerabilidades Identificadas
1. **Almacenamiento en Texto Plano en IndexedDB / LocalStorage:**
   - Actualmente, Zustand persiste estados como `clinicalStore` (que incluye reportes de ansiedad, biofeedback de fatiga y protocolos conductuales) y `userState` en LocalStorage sin cifrado en reposo.
   - *Riesgo:* Cualquier extensión de navegador con permisos de lectura de almacenamiento local o un atacante con acceso físico temporal al equipo podría extraer los datos biomédicos y psicológicos completos.
2. **Riesgo de Fuga de Información Personal (PII) en Prompts de IA:**
   - Cuando se invoca al Worker de Gemini para generar drafts de correo o resúmenes de carrera, si se pasan chunks de contexto sin filtrar, el nombre real del usuario, su ciudad de residencia o detalles personales de salud podrían transmitirse a los servidores de Google.
3. **Persistencia de Documentos Sensibles en el Repositorio Local:**
   - Documentos como `01_source_of_truth_profile.md` y los reportes clínicos en `public/docs/` contienen información personal identificable. Si el repositorio en algún momento se convierte en público o se sube accidentalmente a un fork desprotegido, la privacidad del usuario quedaría comprometida.

---

## 3. Arquitectura de Seguridad Propuesta: Soberanía y Cifrado

Para blindar el sistema, se implementan tres niveles de defensa ineludibles:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        NIVEL 1: AISLAMIENTO LOCAL                      │
│  - Los datos clínicos, de salud sexual y notas privadas NUNCA salen    │
│    del navegador hacia ningún servidor externo bajo ninguna condición. │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│             NIVEL 2: CIFRADO EN REPOSO (WebCrypto API)                 │
│  - Clave derivada de passphrase del usuario (PBKDF2 / Argon2id)        │
│  - Cifrado autenticado AES-GCM de 256 bits para stores sensibles       │
│  - Si el navegador se cierra, los datos quedan cifrados en disco       │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│             NIVEL 3: ANONIMIZACIÓN ANTES DE SALIR A LA IA              │
│  - Pipeline de sanitización: Reemplaza nombres por identificadores     │
│  - Solo se envían conceptos abstractos y números agregados a los LLMs │
└────────────────────────────────────────────────────────────────────────┘
```

### 3.1 Especificación del Cifrado en Repositorio (`secureStorage.ts`)

```typescript
// Implementación recomendada para src/lib/storage/secureStorage.ts
export class SecureLocalStore {
  private static async deriveKey(passphrase: string, salt: Uint8Array): Promise<CryptoKey> {
    const enc = new TextEncoder();
    const baseKey = await window.crypto.subtle.importKey(
      'raw', enc.encode(passphrase), { name: 'PBKDF2' }, false, ['deriveKey']
    );
    return window.crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt,
        iterations: 100000,
        hash: 'SHA-256'
      },
      baseKey,
      { name: 'AES-GCM', length: 256 },
      false,
      ['encrypt', 'decrypt']
    );
  }

  public static async encryptPayload(data: unknown, passphrase: string): Promise<string> {
    const salt = window.crypto.getRandomValues(new Uint8Array(16));
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const key = await this.deriveKey(passphrase, salt);
    
    const encodedData = new TextEncoder().encode(JSON.stringify(data));
    const encrypted = await window.crypto.subtle.encrypt(
      { name: 'AES-GCM', iv }, key, encodedData
    );

    // Empaquetar salt + iv + ciphertext en base64 seguro
    const combined = new Uint8Array(salt.length + iv.length + encrypted.byteLength);
    combined.set(salt, 0);
    combined.set(iv, salt.length);
    combined.set(new Uint8Array(encrypted), salt.length + iv.length);
    
    return btoa(String.fromCharCode(...combined));
  }
}
```

---

## 4. Matriz de Gobernanza de Datos y Sincronización Externa

Para regular con precisión quirúrgica qué datos pueden sincronizarse con plataformas externas (Notion, Google Sheets, GitHub, Cloudflare Worker):

| Dominio de Datos | Almacenamiento Local | Sincronización a Notion | Google Sheets (Spark) | Worker IA (Gemini) |
|---|---|---|---|---|
| **Salud Mental / TDAH / CBT** | ✅ Cifrado obligatorio | ❌ **PROHIBIDO** | ❌ **PROHIBIDO** | ❌ **PROHIBIDO** (Cero PII) |
| **Dolor Físico y Lesiones** | ✅ IndexedDB | ❌ PROHIBIDO | ❌ PROHIBIDO | ⚠️ Solo zona y severidad num. |
| **Salud Sexual / Fisiología** | ✅ Cifrado obligatorio | ❌ **PROHIBIDO** | ❌ **PROHIBIDO** | ❌ **PROHIBIDO** |
| **Entrenamientos (Sets/Reps)** | ✅ Local | ⚠️ Opcional (resumen) | ⚠️ Opcional (resumen) | ⚠️ Solo métricas agregadas |
| **Aplicaciones Laborales** | ✅ Local | ✅ Sincronizable (pipeline) | ✅ Sincronizable (vacantes) | ⚠️ Solo copy de mensajes |
| **Proyectos / Código / Portaf.** | ✅ Local | ✅ Sincronizable | ✅ Sincronizable | ✅ Permitido (público) |
| **Vocabulario Idiomas (SR)** | ✅ Local | ✅ Sincronizable | ✅ Sincronizable | ✅ Permitido (frases) |

---

## 5. Protocolo de Despliegue Público del Portafolio

Dado que el portafolio público (`src/pages/index.astro`, `work.astro`, `twinsight-x500.astro`) convive en el mismo repositorio que el sistema operativo personal:

1. **Segregación de Rutas de Astro:**
   - La carpeta `src/pages/app/**` (la aplicación privada) debe compilarse exclusivamente para uso local o protegerse bajo autenticación básica/token si se despliega en web.
   - La raíz pública de Astro solo debe incluir los assets de portafolio para clientes y reclutadores.
2. **Auditoría Pre-Commit de Secretos:**
   - Se recomienda instalar un hook de pre-commit (`husky` o `.git/hooks/pre-commit`) que ejecute un escaneo de expresiones regulares contra patrones de claves de API (`AIzaSy...`, tokens de GitHub, tokens de Notion) antes de permitir cualquier commit en `main`.
