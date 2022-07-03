#!/bin/sh

imageName="sergeystol/node-web-app"
docker build . -t $imageName --progress=plain --no-cache
docker run -p 8080:8080 -d $imageName