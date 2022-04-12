const config = require('config');

const greetingsService = require("./src/service/greetings_service")
greetingsService.setup(config)

const greetingsController = require("./src/api/greetings_controller")
greetingsController.setup(config, greetingsService)

console.log(config);