const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const TokenClass = sequelize.define("token_classes", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  token_class_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  img_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  percentage_of_ownership: {
    type: DataTypes.DECIMAL(8, 6),
    allowNull: false,
  },
  number_of_the_collection_remaining: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price_usd: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false,
  },
  token_class_perks: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
  },
  status: {
    type: DataTypes.ENUM("enabled", "disabled"),
    allowNull: false,
    defaultValue: "enabled",
  },
});

module.exports = TokenClass;
