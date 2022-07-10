#!/usr/bin/env python3

from subprocess import Popen
from subprocess import run

from bin._4_tutor import npm_path

def main() -> None:

    run([npm_path, "run", "build"])

    preview_process: Popen[bytes] = Popen([npm_path, "run", "preview"])

    try:
        preview_process.wait()
    except KeyboardInterrupt:
        preview_process.kill()

    print()

if __name__ == "__main__":
    main()
