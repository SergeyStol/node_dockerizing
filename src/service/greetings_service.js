let config;

function setup(conf) {
    config = conf;
}

function greetings(req, res, next) {
    res.send(config.get('settings'));
    return next();
}

function sayHello(req, res, next) {
    res.send('Hello world!');
    return next();
}

module.exports = {
    setup: setup,
    greetings: greetings,
    sayHello: sayHello
}