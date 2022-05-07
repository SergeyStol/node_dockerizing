let config;
let greetingsRepository;

function init(configFromParent, greetingsRepositoryParent) {
    config = configFromParent;
    greetingsRepository = greetingsRepositoryParent;
}

function greetings(req, res, next) {
    return sendProperties(res, next);
}

function addGreeting(req, res, next) {
    greetingsRepository.saveGreeting(req.body.text);
    return sendProperties(res, next);
}

function sendProperties(res, next) {
    try {
        res.send(config.get('properties'));
    } catch (e) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Content-Type', 'application/json')
        res.writeHead(400);
        res.write(JSON.stringify('Something went wrong. Can\'t read \'settings\' from config'));
        res.end();
    }
    return next;
}

function sayHello(req, res, next) {
    res.send('Hello world!');
    return next();
}

module.exports = {
    init: init,
    greetings: greetings,
    sayHello: sayHello,
    addGreeting: addGreeting
}