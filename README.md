# node_dockerizing
A few scripts for package node application into docker 
# Getting Started
## Prerequisites
* Node.js 16 (https://nodejs.org/en/download/)
* `git` (https://git-scm.com/)
* `docker` (https://docker.io/)
* `curl`

## Installing

```
git clone https://github.com/SergeyStol/node_dockerizing
cd node_dockerizing
npm ci
```
# Running

## Running locally using docker

```
./run.sh
```

This will launch node.js service in docker container 
listening on `http://localhost:8080`.

Check the service's health by running

```
curl http://localhost:8080
```

You should see "{"property1":"value1","property2":"value2","property3":"value3","httpPort":8080}".

## Running locally using node

```
node app.js
```
This will launch node.js service listening on `http://localhost:8080`.

Check the service's health by running

```
curl http://localhost:8080
```

You should see "{"property1":"value1","property2":"value2","property3":"value3","httpPort":8080}".

## Configuration

The following configuration properties are supported:
* `httpPort` (./config/default.js: `settings.httpPort`) -- server listen port

## Sources
https://nodejs.org/en/docs/guides/nodejs-docker-webapp/