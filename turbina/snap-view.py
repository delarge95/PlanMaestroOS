import subprocess, json, threading, time, base64

proc = subprocess.Popen(["uv", "run", "blender-mcp"], stdin=subprocess.PIPE,
    stdout=subprocess.PIPE, stderr=subprocess.DEVNULL,
    cwd=r"C:\blender\blender_mcp\mcp", text=True, encoding="utf-8")
out = {}
def rd():
    for line in proc.stdout:
        try:
            j = json.loads(line); out[j.get("id")] = j
        except Exception:
            pass
threading.Thread(target=rd, daemon=True).start()
nid = [0]
def send(metodo, params, espera=90):
    nid[0] += 1
    i = nid[0]
    proc.stdin.write(json.dumps({"jsonrpc": "2.0", "id": i, "method": metodo, "params": params}) + "\n")
    proc.stdin.flush()
    deadline = time.time() + espera
    while time.time() < deadline and i not in out:
        time.sleep(0.2)
    return out.get(i, {})

send("initialize", {"protocolVersion": "2024-11-05", "capabilities": {}, "clientInfo": {"name": "zcode", "version": "0"}})
time.sleep(1.5)
send("notifications/initialized", {})
r3 = send("tools/call", {"name": "get_screenshot_of_window_as_image", "arguments": {}})
saved = False
for c in r3.get("result", {}).get("content", []):
    if c.get("type") == "image":
        open(r"E:\Laboral\turbina\snap-actual.png", "wb").write(base64.b64decode(c["data"]))
        saved = True
print("captura:", saved)
proc.terminate(); proc.wait()
