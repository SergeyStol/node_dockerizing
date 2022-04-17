const config = require('config');

const greetingsRepository = require("./src/db/greetings_repository")
greetingsRepository.init(config);

const greetingsService = require("./src/service/greetings_service")
greetingsService.init(config, greetingsRepository);

const greetingsController = require("./src/api/greetings_controller")
greetingsController.init(config, greetingsService)

console.log(config);