const express = require("express");
const ConnectDB = require('./config/MongoDB')
require("dotenv").config();
const winnerRoute = require("./v1/routes/WinnerRoutes");
const swaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const path = require("path");
const cors = require('cors')

const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Winners API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: [`${path.join(__dirname, "./v1/routes/*.js")}`],
};

// settings
const app = express();

// middlewares
app.use(express.json());
app.use("/api/v1", winnerRoute);
app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(swaggerJSDoc(swaggerSpec))
);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

//mongodb connect
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const start = async () => {
    try {
        await ConnectDB(MONGODB_URI)
        app.listen(PORT, () => {
            console.log(`API is listening on port http://localhost:${PORT}/api/v1/winners`);
        })
    } catch (error) {
        console.log(error)
    }
}
start()