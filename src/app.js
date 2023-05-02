const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const setupDatabase = require("./database");

const startServer = () => {
  const app = express();

  app
    .use(
      cors({
        credentials: true,
        origin: process.env.CLIENT_URL,
      })
    )
    .use(express.json())
    .use(cookieParser())
    .use(express.urlencoded({ extended: true }));

  // protected routes
  app.get("/token-classes", async (req, res) => {
    try {
      console.log("GET: /token-classes");
      res.json({ data: [] });
    } catch (error) {
      console.error(error);
      res.status(500).send("Something went wrong");
    }
  });

  app.use((err, req, res, next) => {
    console.error(err);
    if (err.message === "Unauthorized") {
      res.status(401).json({ message: "Invalid username or password" });
    } else {
      res.status(400).json({ message: "Something went wrong" });
    }
  });

  setupDatabase()
    .then(() => {
      app.listen(3002, () => {
        console.log("Server running on port 3002");
      });
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};

module.exports = startServer;
