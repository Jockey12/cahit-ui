import signal
import subprocess
import time
from pathlib import Path

BACKEND_CMD = "bun start"
FRONTEND_CMD = "bun dev -p 8079"  # dev until project finished.

ROOT = Path(__file__).resolve().parent
processes = []


def start(name, command, cwd):
    print(f"Starting {name}: {command} ({cwd})")
    proc = subprocess.Popen(
        command,
        shell=True,
        cwd=str(cwd),
    )
    processes.append((name, proc))
    return proc


def exit_server(signum=None, frame=None):
    print("\n Shutting down...")
    for name, proc in processes:
        proc.terminate()
    for name, proc in processes:
        try:
            proc.wait(timeout=5)
        except subprocess.TimeoutExpired:
            print(f"Killing {name}...")
            proc.kill()
            proc.wait()
    print("Done.")
    raise SystemExit(0)


def main():
    start("backend", BACKEND_CMD, "./backend/")
    start("frontend", FRONTEND_CMD, "./cahit-front/")

    signal.signal(signal.SIGINT, exit_server)
    signal.signal(signal.SIGTERM, exit_server)

    reported = {}
    while True:
        for name, proc in processes:
            rc = proc.poll()
            if rc is not None and name not in reported:
                reported[name] = rc
                if rc != 0:
                    print(f"\n{name} exited with code {rc}")
        if all(p.poll() is not None for _, p in processes):
            break
        time.sleep(0.5)


if __name__ == "__main__":
    main()
