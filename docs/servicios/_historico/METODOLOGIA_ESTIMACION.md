> ⚠ ARCHIVADO en `_historico/` (ciclo de unificació v2, 2026-08-25). Contenido promovido/absorbido por
> [04_catalogo_footage_ia_soporte.md](../04_catalogo_footage_ia_soporte.md) v2 y/o [01_modelo_cobro.md](../01_modelo_cobro.md) v1.2.
> Se conserva por Regla de Oro como referencia histórica. **NO USAR para cotizar.**

# Metodología de estimación y métodos de cobro — AG-SERV

> Fuente de verdad económica del agente. Todo número publicado deriva de este documento (principio §0.1 del plan maestro).
> Ancla externa: doc-03 (`03_salary_benchmark_and_remote_colombia.md`) — freelance global USD 20–50/h; contractor LATAM Unity USD 27–35/h (Lemon.io vía doc-03).
> **Regla AG-SERV #1**: rango ≠ cotización. Presentar cifras a cliente exige aprobación del usuario.

---

## 1. Tarifa base y bandas de complejidad

Tarifa base de referencia: **USD 30/h** (centro del rango LATAM contractor, defensible internacionalmente).

Cada subtarea se clasifica en una banda que define la tarifa efectiva:

| Banda | Nombre | Descriptor general | Multiplicador | Tarifa efectiva |
|---|---|---|---|---|
| T1 | Simple | Elementos pocos y limpios (≤5 piezas), geometría amigable, 1 familia de materiales, sin dependencias | ×0.8 | **USD 24/h** |
| T2 | Medio | 5–20 elementos o detalle moderado; 2–4 familias de materiales | ×1.0 | **USD 30/h** |
| T3 | Complejo | 20–100 elementos, alta densidad de detalle, superficies finas/orgánicas, requisitos técnicos duros | ×1.3 | **USD 39/h** |
| T4 | Hero/Especialista | >100 elementos o asset héroe; shaders/simulaciones/IA senior | ×1.6 | **USD 48/h** |

Descriptores específicos por dominio viven en cada ficha del catálogo (ej.: CAD cuenta piezas y roscas; realtime cuenta tris y draw calls).

## 2. Fórmula de estimación

```
subtotal_horas  = Σ (horas_subtarea_i × tarifa_efectiva(banda_i))
total_servicio  = redondear10( max(150, subtotal_horas × 1.10) )
```

- **+10 % overhead de gestión**: briefs, coordinación, reporting, QA transversal. No se negocia aparte.
- **Mínimo por encargo: USD 150**: cubre el coste fijo de onboarding/administrativo de cualquier encargo, aunque sea pequeño.
- **Redondeo a USD 10** para presentación.

### Modificadores transversales

| Modificador | Efecto | Cuándo |
|---|---|---|
| Revisión extra | +10 % del total por ronda | Se incluyen **2 rondas** por entregable; la 3ª en adelante |
| Urgencia (rush) | ×1.4 total | Entrega <72 h o trabajo fuera de cola; sujeto a disponibilidad |
| Volumen | −10 % por unidad | Packs de ≥4 unidades del mismo servicio (mismo set/estilo) |
| Ida y vuelta de feedback lento | sin costo pero re-agenda | >5 días hábiles sin respuesta del cliente pausa la cola |

### Regla de bandas para servicios mixtos
Cuando un servicio combina tareas de distinta naturaleza (ej.: integración web + shader custom), cada subtarea usa SU banda; el total es la suma. No se promedian bandas.

## 3. Escenario de referencia (ejemplo de trazabilidad)

Render estático producto, nivel T2, usando puntos medios del catálogo §A1:
`setup 3h + lookdev/luz 4.5h + render/post 2.25h + brief 0.75h = 10.5 h × $30 = $315 → ×1.10 = $347 → $350`
Así se construyen TODOS los anclajes del catálogo. Ningún precio aparece sin esta cadena.

## 4. Condiciones comerciales estándar

### 4.1 Pagos por tamaño de proyecto

| Tamaño | Esquema |
|---|---|
| < USD 2,000 | 50 % al inicio / 50 % a la entrega |
| USD 2,000–8,000 | 40 % inicio / 30 % hito intermedio / 30 % entrega |
| > USD 8,000 | 30 % inicio + hitos quincenales contra avance demostrable |

- Plazo de pago preferido **net-7**, máximo tolerado net-15.
- A los 10 días de mora el trabajo se pausa; a los 20, se cancela conservando los pagos hechos.
- El depósito inicial no es reembolsable una vez iniciado el trabajo.

### 4.2 Métodos de cobro

| Método | Uso | Nota |
|---|---|---|
| **Wise** | principal internacional | menor fee, buen tipo de cambio a COP |
| Payoneer | alternativo | clientes corporativos que lo prefieren |
| PayPal | bajo solicitud | fee/comisión se traslada al cliente |
| Transferencia ACH/SEPA | si el cliente prefiere banco | datos bancarios por factura |
| Stripe Invoice | clientes que pagan tarjeta | +3–4 % trasladado |
| USDT/cripto | solo acuerdo explícito previo | no ofrecido por defecto |

### 4.3 Marco administrativo Colombia (NO asesoría fiscal)

- Operación como independiente con **RUT + facturación electrónica DIAN**.
- Exportación de servicios (cliente extranjero) típicamente excluida de IVA; clientes nacionales pueden generar retención en la fuente.
- **Regla crítica doc-03**: esto es estrategia, no asesoría tributaria/legal — validar estructura con contador antes de operar cambios.

### 4.4 Propiedad intelectual y licencias

- Los **entregables finales** se transfieren al cliente contra pago total.
- **Archivos fuente** (Blender/Max/C4D/Houdini/Unity project): licencia aparte salvo acuerdo expreso; por defecto se retienen.
- **Assets de terceros** (librerías Substance, Quixel, plugins, modelos stock, APIs de IA): costo de licencia se traslada y se documenta su licencia de uso.

### 4.5 Alcance (anti scope-creep)

- El brief aprobado define el alcance; toda petición fuera de él se estima como nueva línea con este catálogo (paquete+nivel+subtareas).
- Nunca se ejecuta trabajo no estimado. Las 2 rondas de revisión cubren AJUSTES sobre lo pedido, no funcionalidad nueva.

## 5. Protocolo de cotización de un proyecto nuevo

1. Listar entregables del brief y clasificar cada uno: `paquete del catálogo + banda T1–T4`.
2. Sumar subtareas con sus horas de banda (usar puntos medios para el valor esperado, extremos para el rango).
3. Aplicar overhead 10 %, mínimo $150, modificadores (rush/volumen/revisiones extra).
4. Redondear a $10. Presentar SIEMPRE como rango (min–max) + supuestos listados (nº piezas, tris budget, rondas, plazos).
5. Margen de comunicación: rango mostrado puede ampliarse ±15 % como buffer de negociación, dejando el interno como piso.
6. Registrar la propuesta enviada vs estimado (fase 4 del roadmap) para calibrar tarifas con datos reales.

## 6. Supuestos globales de todo el catálogo

- El cliente provee brief claro, referencias y materiales de entrada (CAD limpio, footage usable, acceso a brand assets). Entradas defectuosas = re-cotización de la subtarea afectada.
- Los tiempos son de trabajo efectivo; los plazos calendario dependen de cola y disponibilidad (declararlos por separado).
- Render farm/tiempos de máquina largos: se estiman como parte de las horas donde aplique; farms de pago externos se trasladan a costo real.
- Hosting, dominios, APIs de IA y sus consumos: costo recurrente siempre del cliente, jamás embebido en el precio del proyecto.
