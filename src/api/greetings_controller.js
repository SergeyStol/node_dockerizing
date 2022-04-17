const restify = require('restify');
let config,
    httpServer,
    greetingsService;

function init(configFromParent, greetingsServiceParent) {
    config = configFromParent;
    greetingsService = greetingsServiceParent;
    httpServer = setupServer(restify);
    setupServerEndpoints();
    setupServerPort()
}
function setupServer(restify) {
    const httpServer = restify.createServer({});
    httpServer.use(restify.plugins.bodyParser());
    return httpServer;
}

function setupServerEndpoints() {
    httpServer.get('/greetings', greetingsService.greetings);
    httpServer.get('/', greetingsService.greetings);
    httpServer.get('/say-hello', greetingsService.sayHello);
    httpServer.post('/greeting', greetingsService.addGreeting);
}

function setupServerPort() {
    httpServer.listen(config.get('properties.httpServer.SERVER_PORT'), function () {
        console.log('%s listening at %s', httpServer.name, httpServer.url);
    });
}

module.exports = {
    init: init
}