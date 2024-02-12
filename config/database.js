require("dotenv").config();
const fs = require("fs");
// const process = require("process");

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    timezone: process.env.TIMEZONE,
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    timezone: process.env.TIMEZONE,
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  // production: {
  //   use_env_variable: "MYSQL_URL",
  //   dialect: "mysql",
  // },
};
