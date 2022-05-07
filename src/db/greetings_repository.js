const mongoose = require('mongoose');
const greetingsDao = require('./daos/greeting_dao');
let config;

function init(configFromParent) {
    config = configFromParent;
    mongoose.connect(config.properties.db.DATA_MONGODB_URI).then(r => console.log("Connected"));
}

function addJSON(json) {
    const jsonSchema = greetingsDao.jsonSchema;
    const jsonModel = mongoose.model("jsons", jsonSchema);
    const jsonItem = new jsonModel({field1 : json});
    jsonItem.save();
}

module.exports = {
    init: init,
    addJSON: addJSON
}