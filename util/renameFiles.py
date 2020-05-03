#! /usr/bin/python3

import os
import sys
import re

# This simple script takes a regular expression to search for files in the current dir, and removes 
# whatever matches the second regex. -n will print out what it would do without renaming files.
def usage():
    if len(sys.argv) < 3:
        print(f'Usage: {os.path.basename(sys.argv[0])} match-file-regex remove-regex [-n]')
        quit()

usage()
allFiles = os.listdir()
myFiles = list(filter(lambda f: re.match(sys.argv[1], f), allFiles))
for f in myFiles:
    newName = re.sub(sys.argv[2], "", f)
    if f == newName:
        continue
    if "-n" in sys.argv:
        print(f'{f} => {newName}')
    else:
        print(f'{f} => {newName}')
        os.rename(f, newName)

