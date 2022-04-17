const config = require("config");

let mongoHost = process.env.DATA_MONGODB_URI;
if (mongoHost) {
    console.log("DATA_MONGODB_URI redefined in environment variables. DATA_MONGODB_URI: " + mongoHost);
    config.properties.db.DATA_MONGODB_URI = mongoHost;
}

const greetingsRepository = require("./src/db/greetings_repository")
greetingsRepository.init(config);

const greetingsService = require("./src/service/greetings_service")
greetingsService.init(config, greetingsRepository);

const greetingsController = require("./src/api/greetings_controller")
greetingsController.init(config, greetingsService)

console.log(config);