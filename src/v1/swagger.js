require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Winners API",
      version: "1.0.0",
    },
    servers: [
      {
        url: `${process.env.HOST}${process.env.PORT}`,
      },
    ],
  },
  apis: ["./src/v1/routes/WinnerRoutes.js", "./v1/routes/*.js"],
};

// Docs in JSON format
const swaggerSpec = swaggerJSDoc(options);

// Function to setup our docs
const swaggerDocs = (app, port) => {
  // Route-Handler to visit our docs
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Make our docs in JSON format available
  app.get("/api-docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(`Version 1 Docs are available on ${process.env.HOST}${port}/api-docs`);
};

module.exports = { swaggerDocs };
