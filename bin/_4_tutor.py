from shutil import which
from sys import exit

_npm_path: str | None = which("npm")

if _npm_path is None:
    exit("npm not found")

npm_path: str = _npm_path
