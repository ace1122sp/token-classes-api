const { Sequelize } = require("sequelize");

const config = require("../config");

const sequelize = new Sequelize(
  process.env.DATABASE_URL,
  config.sequelizeConnectionOptions
);

module.exports = sequelize;
