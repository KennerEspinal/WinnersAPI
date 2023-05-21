const express = require("express");
const ConnectDB = require('./config/MongoDB')
const cors = require('cors')
require("dotenv").config();
const WinnerRoutes = require('./v1/routes/WinnerRoutes')
const { swaggerDocs: v1SwaggerDocs } = require("./v1/swagger")

// settings
const app = express();

// middlewares
app.use(express.json());
app.use(cors())
app.use("/api/v1/winners", WinnerRoutes);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

//mongodb connect
const PORT = process.env.PORT;
const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`API is listening on port ${PORT}`);
            v1SwaggerDocs(app, PORT);
        })
    } catch (error) {
        console.log(error)
    }
}
start()