#!/bin/bash

# Clone Alpine repository (if not already cloned)
if [ ! -d "alpine" ]; then
  git clone https://github.com/alpinejs/alpine.git alpine
fi

# Fetch the latest changes from Alpine repository
cd alpine && git pull origin main

# Install project dependencies
npm install
npm run build

echo "*" >> .gitignore

# Repack the tarball
cd packages/csp && npm pack --loglevel notice 2>&1 >/dev/null | sed -e 's/^npm notice //'

# Reference: https://github.com/alpinejs/alpine/discussions/1944#discussioncomment-2065588

# Update base project
npm update