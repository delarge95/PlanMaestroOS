#!/usr/bin/env python3
"""wearable_push.py — Bridge opcional WHOOP → worker /wearable/ingest.

Lee un export JSON de OpenStrap/edge (una entrada, un array o {"entries": [...]}),
valida cada entrada contra el contrato (rangos de wearableStore/proxy.ts) y hace
POST al worker con el header x-pm-key. Stdlib pura (urllib + json + argparse):
sin dependencias.

El endpoint responde { "ok": true, "ingestedAtIso": "..." } y NO persiste en el
worker — la persistencia real es local en la web app (chip "Importar datos
JSON" en Fitness → Hoy con el MISMO archivo). Ver docs/wearable/BRIDGE.md.

Uso:
    python scripts/wearable_push.py wearable-daily.json \
        --url https://plan-maestro-ia.<tu-account>.workers.dev/wearable/ingest \
        --key $PM_WORKER_KEY

    # dev local (worker corriendo en localhost):
    python scripts/wearable_push.py wearable-daily.json \
        --url http://localhost:8787/wearable/ingest --key pm-local-secret-key
"""

import argparse
import json
import os
import sys
import urllib.error
import urllib.request
from typing import Any, Dict, List, Optional

# Rangos plausibles por campo — mantener en sync con:
#   worker/src/notion/proxy.ts (WEARABLE_RANGES)
#   src/lib/wearable/wearableStore.ts (WEARABLE_RANGES)
RANGES: Dict[str, Dict[str, float]] = {
    "sleepHours": {"min": 0, "max": 24},
    "hrvRmssdMs": {"min": 0, "max": 500},
    "restingHr": {"min": 20, "max": 220},
    "strain": {"min": 0, "max": 21},
    "batteryPct": {"min": 0, "max": 100},
    "skinTempOffsetC": {"min": -5, "max": 5},
}

DATE_LEN = 10  # YYYY-MM-DD


def looks_like_iso_date(value: str) -> bool:
    """True si value tiene forma YYYY-MM-DD (validación ligera, sin calendario)."""
    return (
        len(value) == DATE_LEN
        and value[4] == "-"
        and value[7] == "-"
        and value[:4].isdigit()
        and value[5:7].isdigit()
        and value[8:10].isdigit()
    )


def extract_entries(document: Any) -> List[Dict[str, Any]]:
    """Normaliza el export a lista de entradas (una, array o {entries/daily})."""
    if isinstance(document, dict):
        for key in ("entries", "daily"):
            if isinstance(document.get(key), list):
                return document[key]
        return [document]
    if isinstance(document, list):
        return document
    return []


def validate_entry(entry: Dict[str, Any]) -> Optional[str]:
    """Devuelve None si la entrada es válida; si no, el motivo del rechazo."""
    date_iso = entry.get("dateIso")
    if not isinstance(date_iso, str) or not looks_like_iso_date(date_iso):
        return "dateIso debe tener formato YYYY-MM-DD"
    source = entry.get("source")
    if not isinstance(source, str) or not source.strip():
        return "source es obligatorio (identificador del bridge)"
    if not any(field in entry for field in RANGES):
        return "la entrada no trae ninguna métrica"
    for field, bounds in RANGES.items():
        value = entry.get(field)
        if value is None:
            continue
        if not isinstance(value, (int, float)) or isinstance(value, bool):
            return f"{field} debe ser numérico"
        if not (bounds["min"] <= value <= bounds["max"]):
            return f"{field}={value} fuera de rango [{bounds['min']}, {bounds['max']}]"
    return None


def push(url: str, entries: List[Dict[str, Any]], key: str, timeout: float = 15.0) -> int:
    """POST cada entrada al worker; devuelve el nº de pushes OK. Para al primer error duro."""
    ok = 0
    for entry in entries:
        body = json.dumps(entry).encode("utf-8")
        request = urllib.request.Request(
            url,
            data=body,
            method="POST",
            headers={"Content-Type": "application/json", "x-pm-key": key},
        )
        try:
            with urllib.request.urlopen(request, timeout=timeout) as response:
                payload = json.loads(response.read().decode("utf-8"))
        except urllib.error.HTTPError as err:
            detail = err.read().decode("utf-8", "replace")[:200]
            print(f"HTTP {err.code} para {entry.get('dateIso')}: {detail}", file=sys.stderr)
            raise SystemExit(1)
        if payload.get("ok") is True:
            ok += 1
            print(
                f"OK {entry.get('dateIso')} -> ingestedAtIso={payload.get('ingestedAtIso')}"
            )
        else:
            print(f"Respuesta inesperada para {entry.get('dateIso')}: {payload}", file=sys.stderr)
    return ok


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Push de daily metrics WHOOP (export OpenStrap/edge) al worker."
    )
    parser.add_argument("export", help="Ruta al JSON exportado (wearable-daily.json)")
    parser.add_argument(
        "--url",
        default=os.environ.get("PM_WEARABLE_INGEST_URL", "http://localhost:8787/wearable/ingest"),
        help="Endpoint /wearable/ingest del worker (default: localhost dev)",
    )
    parser.add_argument(
        "--key",
        default=os.environ.get("PM_WORKER_KEY", "pm-local-secret-key"),
        help="Valor del header x-pm-key (default: PM_WORKER_KEY o clave local dev)",
    )
    args = parser.parse_args()

    with open(args.export, "r", encoding="utf-8") as handle:
        document = json.load(handle)

    entries = extract_entries(document)
    if not entries:
        print("El export no contiene entradas (se esperaba una entrada, array o {entries:[...]})", file=sys.stderr)
        return 1

    valid: List[Dict[str, Any]] = []
    for entry in entries:
        if not isinstance(entry, dict):
            continue
        reason = validate_entry(entry)
        if reason is None:
            valid.append(entry)
        else:
            print(f"Descartada entrada invalida ({reason}): {entry}", file=sys.stderr)

    if not valid:
        print("Ninguna entrada valida tras la validacion local.", file=sys.stderr)
        return 1

    print(f"Enviando {len(valid)} entrada(s) a {args.url}")
    ok = push(args.url, valid, args.key)
    print(f"Listo: {ok}/{len(valid)} entradas aceptadas por el worker.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
