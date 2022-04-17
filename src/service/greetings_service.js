let config;
let greetingsRepository;

function init(configFromParent, greetingsRepositoryParent) {
    config = configFromParent;
    greetingsRepository = greetingsRepositoryParent;
}

function greetings(req, res, next) {
    res.send(config.get('settings'));
    return next();
}

function addGreeting(req, res, next) {
    greetingsRepository.saveGreeting(req.body.text);
    res.send(config.get('settings'));
    return next();
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