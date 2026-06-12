# 13. Entrevistas técnicas, negociación y riesgos de oferta

**Resumen ejecutivo:** Este informe brinda pautas prácticas para preparar entrevistas técnicas y negociaciones de oferta adaptadas al perfil de un candidato colombiano especializado en Unity/3D interactivo con portafolio TwinSight X500. Cubre prácticas actuales de entrevistas (preguntas y pruebas típicas), rangos salariales por región (LATAM, EE.UU., UE, Alemania, Portugal), estrategias de negociación como contratista frente a empleado (tarifas, impuestos, beneficios, NDAs, IP, no competencia), y un checklist legal/riesgo (facturación internacional, IVA/IRPF, permisos de trabajo, export control, firmas electrónicas, cláusulas contractuales). Se identifican señales de alerta en ofertas de trabajo, se proponen ejemplos de preguntas para entrevistas técnicas y gerenciales, y se ofrece orientación sobre cómo presentar pruebas técnicas y portafolio (incluyendo métricas clave y video demo). También se sugieren estrategias de negociación salarial según la prioridad de las compañías (A/B/C), ejemplos de cláusulas contractuales con texto modelo breve, y recomendaciones operativas finales (scripts de respuesta, timing, criterios de aceptación/rechazo).

## 1. Entrevistas técnicas: preparación y formato

En el perfil buscado, las entrevistas técnicas combinan preguntas teóricas, ejercicios prácticos (código en vivo o take-home projects), diseño de sistemas y revisión de código. Por ejemplo, Tokio School señala que los ejercicios habituales incluyen **preguntas teóricas**, resolución de algoritmos en vivo, diseño arquitectónico de sistemas y revisión de código existente. En roles Unity/3D interactivo se suman preguntas específicas del motor (objetos, físicas, animaciones) y tareas prácticas sobre optimización o automatización. Es común la siguiente secuencia:

- **Contacto inicial (screening):** repaso de CV/portafolio.  
- **Entrevista técnica:** preguntas de C# y algoritmos (p. ej. OOP, estructuras de datos) o sobre el motor Unity (por ejemplo, ciclo de vida de un *GameObject*, funcionalidad de `Update()` vs `FixedUpdate()`, manejo de *Prefabs*, tipos de *Colliders*, etc.). Adaface documenta estas preguntas típicas: “¿Qué es un GameObject en Unity y cómo se relaciona con un Componente?”, “¿Qué propósito tienen las funciones `Update()` y `FixedUpdate()`?”, “¿Cómo se crea un Prefab y por qué son útiles?”, “¿Cuáles son los tipos principales de Collider en Unity y para qué sirven?”, entre otras.  
- **Prueba práctica:** puede ser un *take-home* (pequeño prototipo o reto de optimización) o un ejercicio de codificación en vivo (por ejemplo, escribir un script en C# para resolver un problema concreto, diseñar un pipeline sencillo en Unity o escribir un shader básico). En algunos casos se hace *pair programming* en línea o revisión de código preexistente.  
- **Entrevista con líderes:** discusión de arquitectura, retroalimentación sobre el portafolio, preguntas de diseño de sistemas o pipeline (por ejemplo: “¿Cómo estructurarías un pipeline de importación de assets o de simulación?”). También se pueden hacer preguntas situacionales o de experiencia (“Describe un reto de rendimiento que hayas resuelto”).  
- **Entrevista HR / cultural:** preguntas generales (motivación, disponibilidad, expectativas salariales).  

En resumen, el candidato debe prepararse para resolver en directo algoritmos y problemas de programación (como se señala en) y al mismo tiempo demostrar conocimiento profundo de Unity y la cadena CAD→gráficos en tiempo real. Se recomienda practicar con ejemplos de preguntas Unity/TA (ver ejemplos arriba) y repasar ejercicios de optimización (por ejemplo, manejo eficiente de miles de *GameObjects*, uso de *coroutines* vs *threads*, perfilado de escena, etc.). Además, es útil repasar conceptos de gráficos (Shader Graph, iluminación, VR-specific optimizations) y buenas prácticas de pipeline (automatización en Unity Editor, uso de Git y resolución de conflictos).

## 2. Rangos salariales por región (USD/mes aproximados)

A continuación se resumen rangos salariales brutos mensuales aproximados para un perfil Unity/Real-Time 3D, según región de contratación:

| **Región/ubicación**         | **Rango ~$ USD/mes**           | **Fuente**                        |
|------------------------------|--------------------------------|-----------------------------------|
| Latinoamérica (remoto)       | ~3.000 – 5.000                 | Datos contractor   |
| EE.UU. (remoto)              | ~6.000 – 12.000                | Datos contractor   |
| Europa (remoto, W. Europa)   | ~5.000 – 9.000                 |  Estimación (EE.UU. –10/20%)       |
| Alemania (on-site)           | ~4.500 – 6.500 (~50k–75k €)    | Freelancermap      |
| Portugal/España (on-site)    | ~2.500 – 4.000 (~20k–35k €)    | Freelancermap      |

- **Latinoamérica (remoto):** Un perfil senior en Latinoamérica cobra típicamente **$35/hr** (≈$5.6k/mes), rango medio $27–47/hr.  
- **EE.UU. (remoto):** Según datos, un Senior Unity dev EE.UU. cobra mediana **$57/hr** (~$9.1k/mes); en top markets llega a $72–89/hr (~$13–15k/mes).  
- **Europa (remoto):** Los salarios remotos en Europa Occidental suelen ser algo menores que en EE.UU. (por ejemplo, 5–10% menos). Para puestos equivalentes estimamos ~\$5–9k/mes.  
- **Alemania:** Según Freelancermap, un Unity developer gana **50–75k € al año** (aprox \$4.4k–\$6.6k/mes).  
- **Portugal/España:** En España/Portugal los rangos suelen ser 20–35k € (≈\$2.3k–\$3.9k/mes).  

Estos valores son brutos y dependen de experiencia y tipo de empresa. En general, a un desarrollador Unity remoto en EE.UU. se le puede pagar el doble que a uno en LATAM, mientras que la contratación en Europa (especialmente Europa del Este/LatAm) ofrece ahorros para la empresa sin pérdida de calidad. Las cifras anteriores ayudan a fijar expectativas salariales: por ejemplo, una oferta de **$5k/mes** para puesto remote EE.UU. sería baja; **>$7k/mes** está en rango competitivo para un perfil senior, mientras que en LATAM se podría considerar aceptable desde $3–4k.

## 3. Negociación: contratista vs empleado

- **Estatus y tarifa:** Como contratista independiente (freelance/consultor), el candidato debe negociar una tarifa **por día u hora** que cubra su salario neto esperado más el costo de impuestos y beneficios. Según el IRS de EE.UU., al empleador *no se retiene ni paga impuestos* por servicios de un contratista, a diferencia de un empleado. Por tanto, la tarifa bruta que acuerde el contratista debe incluir la parte de salud/seguridad social y beneficios que una empresa normalmente asumiría (en EE.UU. ~15.3% de Seguro Social/Medicare, en Colombia aportes independientes, etc.). Como regla, una tarifa diaria de freelance suele equivaler a ~2–3 veces el prorrateo diario de un salario corporativo, para compensar la falta de prestaciones.  
- **Impuestos y facturación:** El contratista debe encargarse de sus impuestos. En Colombia, las prestaciones de servicios exportadas usualmente llevan **retención en la fuente** (~10% sobre el pago) pero no IVA (0% por exportación de servicios). En España/UE, la factura a cliente empresarial UE se emite sin IVA (inversión del sujeto pasivo); a cliente fuera de la UE (exportación) suele ser exenta de IVA. Se debe verificar el régimen fiscal local: en Colombia puede requerirse inscripción como exportador y declarar renta por esos ingresos (retención del 10%). El contratista debe informar al cliente (p. ej. con factura internacional) su estatus fiscal.  
- **Beneficios y seguridad:** Como empleado se recibirían seguro médico, vacaciones pagadas, cotizaciones sociales, etc. Como contratista no; por eso la negociación de la tarifa debe compensar (o bien solicitar una cláusula de pago adicional para cubrir esos beneficios). En EE.UU. por ejemplo, un contratista 1099 no recibe 401k ni seguro, por lo que la tarifa suele ser mayor. En Europa se consideran aportes de autónomo vs empleado.  
- **Duración y exclusividad:** El contrato independiente suele ser de corto plazo (proyecto o por horas) y sin prestaciones de preaviso amplio. Un empleado tiene, según país, un periodo de aviso (ej. 1 mes). Es importante negociar la cláusula de terminación anticipada (por ejemplo, 15 días vs 1 mes). También revisar acuerdos de exclusividad: de empleado a veces se espera dedicación exclusiva, mientras que como contratista se puede negociar libertad para otros proyectos no competidores.  
- **Cláusulas de confidencialidad/IP:** Tanto empleado como contratista suelen firmar NDA. Conviene clarificar la **propiedad intelectual**: típicamente el empleador se quedará con el código/proyecto, pero se puede negociar derechos de uso (por ejemplo, licencias perpetuas sobre herramientas genéricas que uno lleve). Verificar cláusulas de no competencia: si es muy amplias, tratarlas (por ejemplo, limitar geografía o duración).  
- **Seguridad laboral:** Un contrato como empleado incluye seguro de desempleo y derechos laborales. Como contratista no. Esto se compensa con mayor remuneración. Revisar también si el contrato es “local” (requiere estar registrado como autónomo o LLC local) o un contrato de servicios internacional (facturación en dólares/euros). Cada país tiene distintas obligaciones (por ejemplo, IVA español, IRPF español del 15% retención al  autónomo, etc.), así que confirmar mecanismos de pago (transferencia internacional, factura con VAT, etc.) durante la negociación.

**Fuente:** El IRS explica que los contratistas no conllevan retenciones de Seguro Social/Medicare del pagador, lo que implica que el trabajador independiente asume todos los impuestos por su cuenta.  

## 4. Riesgos legales y checklist contractual

Antes de aceptar una oferta (especialmente remota/internacional) conviene revisar estos puntos clave:

- **Contrato por escrito:** Confirmar alcance de trabajo, deliverables, duración, forma de pago, moneda, jurisdicción legal. Evitar contratos ambiguos. Pedir versión final y plazos razonables para leerlo.  
- **Facturación internacional:** Si cobra como freelance a empresa extranjera, la factura debe cumplir requisitos (con NIF/VAT europeo o sin IVA si es exportación, etc.). Por ejemplo, facturar servicios a cliente UE *B2B* sin IVA (inversión de sujeto pasivo). Si es fuera de la UE, emita con IVA 0% (exportación). Conservar documentación que justifique la exportación.  
- **Impuestos locales:** Confirmar retenciones exigibles. En Colombia, las empresas retienen ~10% (sin IVA). En España, por ejemplo, un autónomo en facturas a empresa debe retener 15% (IRPF) si no aplica el régimen de 0%. Evaluar darse de alta en el régimen correspondiente (autónomo, freelance con NIF, etc.).  
- **Permiso de trabajo / reubicación:** Si el puesto es remoto desde Colombia, normalmente no se requiere visa. Pero si hay planes de reubicación (Alemania o Portugal), revisar apoyo de la empresa para visa/permiso. Verificar que el empleo formal sea compatible con el futuro status: por ejemplo, Alemania puede requerir visa de empleo (y el candidato, al casarse con ciudadano alemán, podrá gestionar residencia). Obtener claro si ofrecen sponsor de visa, reembolso de gastos de traslado, etc.  
- **Seguridad de datos y export controls:** Si el trabajo toca tecnologías sensibles (VR/AR en sectores regulados, simulaciones militares, criptografía, etc.), podría requerirse comprobación de antecedentes o licencia de exportación. Confirmar que el proyecto no infringe leyes de exportación (por ejemplo, trabajo con CAD en sector defensa).  
- **Cumplimiento corporativo:** Verificar reputación de la empresa (sitio web, proyectos previos, reviews). Cuidado con empresas desconocidas sin presencia pública.  
- **Cláusulas de NDA y propiedad intelectual:** Revisar que el NDA sea equilibrado (proteja datos confidenciales de ambas partes). Las cláusulas de propiedad intelectual deben indicar claramente que la empresa adquiere derechos sobre el trabajo realizado, y qué (si algo) retiene el candidato (por ejemplo, uso de conocimiento general o código reutilizable).  
- **No competencia / exclusividad:** Negociar límites razonables de duración (por ejemplo, 6 meses) y alcance (solo proyectos directamente competidores o mismos clientes). Para roles contractor es habitual evitar clausulas muy amplias que impidan trabajar en proyectos distintos a largo plazo.  
- **Período de prueba / terminación:** Aclarar si existe “período de prueba” o cláusula de prueba y de cuánto tiempo. En contratos de consultoría, buscar cláusula de salida anticipada con preaviso (p.ej. 15–30 días), para no quedar indefinido. Como referencia, RRHH en contratos suele exigir 1 mes de aviso para terminar.  
- **Beneficios y pagos:** En ofertas de trabajo, detallan si el salario es bruto o neto, y qué cubre (e.g. tickets restaurante, bonos, stock options). Revisar también periodicidad de pago (mensual/bimestral) y penalizaciones por retrasos.  
- **Seguridad social y salud:** Si va como “empleado local” en Alemania/España, preguntar tasas de contribución y beneficios (seguro salud, pensión). Si es empleado remoto en Colombia (caso menos común, pero posible con empresas colombianas), verificar prestaciones locales obligatorias.  
- **Otros riesgos:** Evitar ofertas que pidan inversión inicial (pago por tool u oportunidad), que no den acceso al GitLab/repositorio real o que exijan períodos de prueba sin pago. Cualquier petición inusual (pagar por software o equipo propio sin compensación) es señal de alerta.

## 5. Señales de alerta en ofertas

Durante el proceso se deben detectar posibles fraudes o malas oportunidades. Señales de alerta típicas:

- **Salario “demasiado bueno para ser cierto”:** ofertas con sueldos muy por encima del mercado sin entrevistas técnicas justificadas suelen ser estafas o confusiones.  
- **Falta de entrevista técnica o de equipo:** si avanzan solo con HR y no hay pruebas técnicas (o las entrevistas son solo de ventas) podría indicar falta de profesionalismo en la empresa.  
- **Petición de dinero o equipo propio:** una empresa legítima nunca pedirá al candidato pagos adelantados por software, cursos, equipos, etc.  
- **Dirección o referencia poco claras:** dificultad para verificar la existencia de la empresa, perfiles inexistentes en LinkedIn o mala reputación en buscadores.  
- **Contratos verbales o vagas:** ausencia de oferta escrita detallada (salario, horas, responsabilidades) es un riesgo; siempre exigir contrato o al menos un offer letter por escrito.  
- **Presión excesiva:** si insisten en “aceptar ya” sin tiempo para consultar el contrato o negociar, es sospechoso.  
- **Incompatibilidad con la experiencia:** ofertas que piden habilidades no relacionadas con Unity/3D (por ejemplo, sólo ventas, MLM, o multilevel marketing) no corresponden al rol.  
- **Pagos en esquemas dudosos:** recibir pago únicamente por criptomonedas u otros métodos no convencionales sin explicación, es un riesgo.

## 6. Preguntas de entrevista (técnicas y gerenciales)

Preparar ejemplos de preguntas que se podrían hacer:

- **Preguntas técnicas Unity/3D** (basadas en Adaface):  
  - “¿Qué es un *GameObject* en Unity y cómo se relaciona con un Componente?”.  
  - “Explique `Update()` vs `FixedUpdate()` y cuándo usar cada uno”.  
  - “¿Cómo crear un *Prefab* y por qué son útiles?”.  
  - “¿Cuáles son los principales tipos de *Collider* en Unity y para qué se utilizan?”.  
  - Preguntas de C#: “¿Cuáles son los pilares de la POO? (herencia, polimorfismo, etc.)”.  
  - “¿Cómo optimizarías el rendimiento de un juego móvil con muchos objetos físicos?” (p. ej. culling, LOD, batching).  
  - “Explique cómo implementar un sistema de guardado de datos en Unity (serialización, PlayerPrefs, archivos)”.  
  - “Describa un sistema de UI o animación que haya implementado, o cómo integraría un SDK externo (analíticas, AR) en Unity.”  

- **Preguntas para Technical Artist / pipeline:**  
  - “¿Cómo diagnosticaría y mejoraría el rendimiento de un shader o escena compleja?”  
  - “Dado un conjunto de assets CAD, ¿cómo los importaría a Unity optimizando poliedros y texturas?”  
  - “Diseñe brevemente un pipeline de build automatizado para varios entornos (dev/test/prod) en Unity.”  
  - “¿Cómo mantendría datos de simulación (digital twin) sincronizados entre el modelo CAD y el juego en tiempo real?”  

- **Preguntas gerenciales / situacionales:**  
  - “¿Qué proyecto de su portafolio destaca más, y qué métrica (FPS, memoria, calidad visual) mejoró gracias a su aporte?”  
  - “Dé un ejemplo de un bug difícil que resolvió en Unity. ¿Cómo lo diagnosticó?”  
  - “¿Cómo priorizaría tareas si le asignan mejorar la velocidad de carga vs. la calidad visual en un juego?”  
  - “¿Qué herramientas internas o librerías ha creado o mejorado, y cómo benefician al equipo?”  

Se recomienda preparar también preguntas para el entrevistador, por ejemplo: “¿Qué retos técnicos enfrenta el equipo actualmente? ¿Qué expectativas tienen respecto al workflow o a la creación de nuevas herramientas?”, “¿Cuál es la estructura del equipo de producción?”, etc.

## 7. Preparación de pruebas técnicas y portafolio

Para maximizar el impacto del portafolio (incluyendo TwinSight X500 y proyectos secundarios):

- **Contexto claro:** Cada proyecto debe llevar una breve descripción de su propósito y tu rol (p.ej. “Desarrollo del pipeline CAD→Unity para simulación industrial; yo fui responsable del importador de modelos, optimización de mallas y creación de dashboards de visualización”).  
- **Métricas específicas:** Mostrar datos cuantitativos (p.ej. reducción de polígono en %, aumento de FPS, tamaño de build). Por ejemplo, “Optimicé la escena X de 30 FPS a 60 FPS en un dispositivo móvil, reduciendo un 40% de draw calls” o “Disminuí el tiempo de carga inicial de 10s a 3s implementando loading asincrónico”.  
- **Artefactos reproducibles:** Incluir enlaces a repositorios (GitHub/GitLab) con código fuente o ejemplos de escenas (puede ser solo fragmentos clave, no necesariamente todo el proyecto). Acompañar de capturas de pantalla o diagramas de flujo del proceso.  
- **Video demo:** Un video corto (60-120s) mostrando la aplicación o demo final en acción, resaltando las características principales y la interacción (por ejemplo, cómo reaccionan los objetos CAD al comando del usuario, o cómo el entorno 3D visualiza datos en tiempo real). Este video puede ser alojado en ArtStation o YouTube con enlace en el portafolio.  
- **Herramientas y pipeline:** Si desarrollaste herramientas internas (scripts de Unity Editor, nodos de shader, plugins), mostrar ejemplos (captura del Editor o del código) con descripción de su funcionalidad y cómo automatizaron tareas.  
- **Documentación:** Un README claro que explique cómo ejecutar o visualizar el proyecto, qué tecnologías usa (Unity version, librerías, etc.) y qué parte aporta tu esfuerzo personal.  
- **Proyectos secundarios relevantes:** Incluir brevemente proyectos de realidad aumentada (ARA) o Blender (retrato) si muestran habilidades técnicas (por ejemplo, un shader procedural en Blender o un prototipo WebGL AR). Sin embargo, enfatizar TwinSight como proyecto principal.  
- **Al preparar pruebas técnicas:** practicar resolver pequeños retos de Unity bajo tiempo (por ejemplo, crear una lógica sencilla en C# en 20–30 minutos) y repasar algoritmos comunes. Tener ejemplos listos de código limpio. Al enfrentar un *take-home*, seguir buenas prácticas: escribir tests o al menos comentarios que expliquen el código, incluir instrucciones de uso y resultados esperados.

## 8. Estrategia de negociación salarial por prioridad

Según la clasificación previa de compañías (A/B/C), sugerimos diferentes objetivos salariales y argumentos al negociar:

- **Empresas prioritarias A (grandes estudios, tech líderes, UE/EE.UU.):** Apuntar a la cúspide del rango salarial. Preparar un **rango objetivo** alto (p.ej. EE.UU. remoto: \$8k–\$10k/mes; UE: \$6k–\$8k/mes) basado en datos de mercado. Argumentar con el valor único de TwinSight y habilidades especializadas (RT3D, CAD). Si es contrato freelance en EE.UU., proponer tarifa diaria proporcional (p.ej. \$600–\$800/día). Enfatizar disposición a hacer contrapartida (p.ej. asumir tareas extra, mayor disponibilidad horaria) a cambio de mejor paquete. No descartar ofrecer cierta flexibilidad (p.ej. stock options o bonus por cumplimientos) si no bajan mucho el efectivo.  
- **Empresas prioridad B (mid-size UE o LATAM remoto):** Fijar rango medio (por ejemplo \$5k–\$7k/mes en EE.UU., \$4k–\$6k/mes en UE/LATAM). Negociar beneficios extra en vez de salario bruto (p.ej. pago de herramientas, cursos, días extra de PTO). Mostrar interés y cómo se puede asumir mayor responsabilidad gradualmente.  
- **Empresas prioridad C (startups pequeñas, locales o roles secundario):** Ser más flexible. Un contrato en LATAM local podría rondar \$2k–\$3k/mes (o tarifa de \$20–\$30/h). Aquí se puede negociar *package* (tal vez un modesto salario + participación), o buscar compensaciones no monetarias (trabajo remoto, horas reducidas con horario fijo). Sin embargo, tener un límite mínimo claro (ej. no aceptar menos de \$2k/mes netos). En roles de aprendizaje (junior), negociar entrenamiento concreto a cambio de tarifa más baja inicialmente.

En toda negociación, es útil presentar ejemplos de salarios del mercado (usar datos de [23] y [35]) y recordar la diferencia contractor/empleado. Siempre dejar algún espacio para la “contraoferta” del reclutador, sin mostrar el mínimo deseado en la primera cifra. 

## 9. Ejemplos de cláusulas contractuales

Algunas cláusulas comunes y cómo ajustarlas:

- **No competencia:** _“Durante X tiempo tras la terminación, no prestará servicios para competidores en Y industria.”_ Propuesta: Limitar a 6–12 meses y sector específico, o eliminar geografía amplia. Por ejemplo: **“No competir en proyectos basados en el mismo modelo de simulación en industrias diferentes (defensa, medicina, etc.) fuera de [países acordados].”**  
- **Propiedad intelectual:** _“Toda IP desarrollada será propiedad exclusiva de la empresa.”_ Se puede negociar: **“La propiedad del código fuente será de la empresa, otorgándole al contratista licencia de uso personal para su portafolio.”** Además, especificar que ciertas herramientas genéricas preexistentes no se transfieren.  
- **Confidencialidad (NDA):** _“No divulgar información sensible X (cliente, código, algoritmos).”_ Se acepta, pero pedir límite de tiempo (p.ej. 2 años) y definición clara de “confidencial”.  
- **Limitación de responsabilidad:** Incluir que el contratista no será responsable de daños indirectos o fallos por defecto del software sin malicia.  
- **Condiciones de pago:** _“Pago a 30 días tras facturar.”_ Asegurar que sea calendarizado o quincenal para flujo de caja.  
- **Cláusula de terminación:** Definir período de preaviso razonable (p.ej. 15 días) para ambas partes.  
- **Bonificaciones y revisiones:** Si aplica, establecer criterios claros de revisión salarial anual o condiciones de bonus por desempeño.  

En negociación, se sugiere proponer ejemplos de redacción breve: por ejemplo, para no competencia se puede introducir “salvo que sea requerido por ley local” o reducir "alcance global" a "proyectos específicos". Para NDAs, pedir que incluya excepción de información ya pública. Estos ajustes muestran profesionalismo y conocimiento legal.

## 10. Recomendaciones operativas finales

- **Scripts de comunicación:** Preparar frases clave. Por ejemplo, para confirmar interés en la oferta: “Estoy muy entusiasmado con la oportunidad. Mi experiencia en [TwinSight X500, optimización] me permite aportar en [punto fuerte del rol]. Me gustaría saber más sobre [cultura/stack/tareas].” Al rechazar amablemente: “Agradezco la oferta, pero tras evaluar los términos he decidido que no es adecuado para mis objetivos en este momento.”  
- **Calendario de aplicación:** Responder a cada contacto en <3 días, preparar material específico (CV, carta de presentación orientada, link a portfolio) para cada aplicación. Mantener rastreador (ver sección 12) con fechas de entrevistas y próximos pasos.  
- **Entrevista de hiring manager:** Además de preguntas técnicas, prepare preguntas para entender prioridades del puesto (“¿Cómo definen el éxito en este rol?”), estructura del equipo y crecimiento futuro.  
- **Preparación personal:** Dormir bien la noche anterior, revisar proyectos relevantes justo antes, tener ejemplos listos con cifras. Simular explicar TwinSight y otros demos en 1-2 minutos para pitch elevator.  
- **Negociación final:** Tras recibir oferta, analizar con calma. Hacer contraoferta basada en cifras del mercado y beneficios comparables. Si la empresa pone condiciones (por ejemplo, exclusividad total), valorar costo/beneficio. Es recomendable solicitar 2–3 días para revisar el contrato final.  
- **Aceptar vs rechazar:** Aceptar cuando la oferta cumpla expectativas salariales mínimas (según prioridad) y condiciones laborales claras (sin cláusulas abusivas). Rechazar si el salario está muy por debajo del mercado, o si el contrato tiene riesgos legales inaceptables (p.ej. cláusula de exclusividad indefinida). En caso de dudas, es válido expresar reservas y negociar ajustes antes de firmar.  

**Diagramas (flujos de proceso):**

```mermaid
flowchart LR
    A[Envío de CV/Portafolio] --> B[Screening inicial (RRHH)]
    B --> C[Entrevista técnica / Coding Challenge]
    C --> D[Prueba práctica o demo]
    D --> E[Entrevista con Líder técnico]
    E --> F[Entrevista final (recursos humanos)]
    F --> G[Oferta de empleo]
```

```mermaid
flowchart LR
    Offer[Oferta Recibida] --> Review[Revisar Condiciones (salario, beneficios)]
    Review --> Negociation[Negoaciación de Términos (salario, cláusulas)]
    Negociation --> Counter[Contraoferta (ajustes documentados)]
    Counter --> Agreement[Acuerdo Final (firma de contrato)]
```

**Fuentes:** Datos salariales y de mercado según informes actualizados; normativa IRS sobre contratistas; guía fiscal para facturación internacional; preguntas Unity de Adaface; recomendaciones de preparación técnica. Cualquier supuesto no especificado (por ejemplo, conversión EUR/USD) se ha estimado con tasas aproximadas recientes.