#!/usr/bin/env python3

from subprocess import Popen

from bin._4_tutor import npm_path

def main() -> None:

    dev_process: Popen[bytes] = Popen([npm_path, "run", "dev"])

    try:
        dev_process.wait()
    except KeyboardInterrupt:
        dev_process.kill()

    print()

if __name__ == "__main__":
    main()
