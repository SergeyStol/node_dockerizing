const restify = require('restify');
let config,
    httpServer,
    greetingsService;

function setup(conf, greetingsServiceParent) {
    config = conf;
    greetingsService = greetingsServiceParent;
    httpServer = restify.createServer({});
    setupServerEndpoints();
    setupServerPort()
}

function setupServerEndpoints() {
    httpServer.get('/greetings', greetingsService.greetings);
    httpServer.get('/', greetingsService.greetings);
    httpServer.get('/say-hello', greetingsService.sayHello);
}

function setupServerPort() {
    httpServer.listen(config.get('settings.httpPort'), function () {
        console.log('%s listening at %s', httpServer.name, httpServer.url);
    });
}

module.exports = {
    setup: setup
}