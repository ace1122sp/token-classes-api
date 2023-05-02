const startServer = require("./src/app");

startServer();

process.on("unhandledRejection", (reason) => {
  throw reason;
});
process.on("uncaughtException", (err) => {
  console.error("uncaught error: ", err);
  process.exit(1);
});
