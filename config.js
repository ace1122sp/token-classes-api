const development = require("./config.devs-local");
const production = require("./config.prod");

const config = process.env.NODE_ENV === "production" ? production : development;

module.exports = config;
