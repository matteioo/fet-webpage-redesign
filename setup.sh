#!/bin/bash

# Update the Alpine submodule
git submodule init
git submodule update --remote

# Reference: https://github.com/alpinejs/alpine/discussions/1944#discussioncomment-2065588
cd alpine || exit
npm install
npm run build
cd packages/csp || exit
npm pack --loglevel notice 2>&1 >/dev/null | sed -e 's/^npm notice //'

