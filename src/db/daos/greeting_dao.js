const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let jsonSchema = new Schema({
    field1: Object
});

module.exports = {
    jsonSchema: jsonSchema
}