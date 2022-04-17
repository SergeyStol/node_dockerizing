const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let greetingSchema = new Schema({
    text: String
});

module.exports = {
    greetingSchema: greetingSchema
}