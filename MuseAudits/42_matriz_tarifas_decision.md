# 42 — Matriz de decisión: rate card única (v1 vs v2 vs v1.3 vs código)

> Tres sistemas conviven y el código implementa un cuarto híbrido. Nada se publica
> con precios hasta que el usuario marque una opción por fila. Fuentes:
> `docs/servicios/CATALOGO_SERVICIOS.md` (v1), `00_METODOLOGIA.md` (v2),
> `PROMPT_MASTER_WEB.md` v1.3, `src/data/services/rateCard.ts` + `formula.ts` (código),
> `docs/cotizador/auditoria-precios-ciclo7.md` (motor único ya decidido: `derivarTier` +
> `computeQuote`; ciclo 9 retiró informativas).

## 42.1 Comparativa

| Concepto | v1 CATÁLOGO | v2 METODOLOGÍA | v1.3 MASTER | Código hoy |
|---|---|---|---|---|
| Clases USD/h | ART 25-38, RT 28-45, AI 35-55, TL 32-48 | RC-ART 20-28, RTA 25-35, WEB 27-38, AI 28-40, CON 40-55 | XS 18-24, N1 25-30, N2 28-35, N3 35-45, N4 45-55 | RC-* (= v2 USD) |
| COP/h | solo referencia TRM | 30-42k → 60-82k (anti-TRM) | 25-35k → 95-130k | RC-* COP (= v2) |
| Niveles | S/M/L(/XL) | XS-XL (5 tiers) | XS+N1-N4 (derivados, nunca los elige el cliente) | XS/S/M/L/XL |
| Redondeo | múltiplos 5 USD | 50 USD / 10.000 COP | 1.000 COP, piso 400k | verificar en `formula.ts` (encargo) |
| Gestión | +10% TL visible | incluida hasta 10%, excedente explícito N2 | incluida hasta 10% | verificar |
| Urgencia | +30/+50 | no-rush para bundle (rush aparte) | ×1.25 arranque <72h | none/+30% 72h/+50% 24h |
| Bundle/lote | −10% | 2⇒−5%, 3+⇒−10% no rush | lote −15-25%, recurrente −5%, retainer −5-10% | bundlePct (verificar fórmula) |
| Lanzamiento | — | −20/−40% | −25% (5 primeros o 2026-12-31) | defaultPct 25, mismo alcance |
| Pagos | <1500 50/50; ≥1500 30/40/30 | ≤500 100%; 500-2k 50/50; 2-8k 40/30/30; >8k hitos | N3/N4 siempre por hitos | esquemaPago (verificar) |
| Piso | — | — | USD 100/proyecto | verificar |

## 42.2 Recomendación (propuesta, no decisión)

1. Clases y bandas: **v1.3** (N1-N4 derivadas + XS puerta de entrada; es la única con
   anclas doc-03/research por banda y con regla "el cliente nunca elige nivel").
2. COP: **v1.3** (anti-TRM explícito + redondeo 1.000 + piso 400k).
3. Urgencia: **código** (+30/+50) por ser lo ya testeado; enterrar ×1.25.
4. Bundle: **v2** (2⇒−5%, 3+⇒−10%, no acumulable con rush) por simplicidad pública;
   lote −15-25% y recurrente −5% quedan como política manual, no del wizard.
5. Lanzamiento: **−25%, 5 primeros o 2026-12-31** (unanimidad v1.3+código).
6. Pagos: **v2** (4 tramos) + regla v1.3 (N3/N4 siempre por hitos).
7. Piso USD 100 (v1.3). Gestión: incluida hasta 10% (v2/v1.3), excedente explícito.
8. Naturaleza de cifras (v1 §cabecera, mantener): rangos = estimación operativa para
   scoping; cotización cerrada tras discovery; nunca rango como precio final.

## 42.3 Checklist de decisión para el usuario (7 marcas)

- [ ] Bandas USD/COP (v1.3) · [ ] Urgencia +30/+50 · [ ] Bundle v2 · [ ] Launch −25%
- [ ] Pagos v2 + hitos N3/N4 · [ ] Piso USD 100 · [ ] Cuentas (Wise/Payoneer/Deel) + TRM operativa
Tras las 7 marcas: 1 encargo entierra los 2 sistemas perdedores (docs a `_historico/`,
código a `rateCard.ts` único, tests 44/44 en verde).
