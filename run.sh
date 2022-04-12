docker build . -t stols/node-web-app
docker run -p 8080:8080 -d stols/node-web-app