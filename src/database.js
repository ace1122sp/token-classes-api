const sequelize = require("./sequelize");

const setupDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    await sequelize.sync({ force: true });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = setupDatabase;
