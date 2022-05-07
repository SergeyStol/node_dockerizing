#!/bin/sh

dps -a | awk '{print $NF}' | grep mongodb
if [ $? != 0 ] ; then
    docker rm -f mongodb
fi
docker run -d -p 27017:27017 --name mongodb mongo:5.0.7