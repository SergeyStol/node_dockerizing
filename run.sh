#!/bin/sh
docker build . -t stols/node-web-app --progress=plain --no-cache
docker run -p 8080:8080 -d stols/node-web-app