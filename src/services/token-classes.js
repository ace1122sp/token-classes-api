const TokenClass = require("../models/token-class");

const getTokenClasses = async () => {
  try {
    const data = await TokenClass.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    return data;
  } catch (error) {
    console.error("Unable to get data:", error);
    throw error;
  }
};

module.exports = { getTokenClasses };
