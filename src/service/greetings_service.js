let config;
let greetingsRepository;

function init(configFromParent, greetingsRepositoryParent) {
    config = configFromParent;
    greetingsRepository = greetingsRepositoryParent;
}

function settings(req, res, next) {
    return sendSettings(res, next);
}

function addJSON(req, res, next) {
    greetingsRepository.addJSON(req.body);
    return sendSettings(res, next);
}

function sendSettings(res, next) {
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
    settings: settings,
    sayHello: sayHello,
    addJSON: addJSON
}