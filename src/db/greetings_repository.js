const mongoose = require('mongoose');
const greetingsDao = require('./daos/greeting_dao');
let config;

function init(configFromParent) {
    config = configFromParent;
    mongoose.connect(config.db);
}

function saveGreeting(greeting) {
    const greetingSchema = greetingsDao.greetingSchema;
    const greetingsModel = mongoose.model('Greetings', greetingSchema);
    const greetingsItem = new greetingsModel({text : greeting});
    greetingsItem.save();
}

module.exports = {
    init: init,
    saveGreeting: saveGreeting
}