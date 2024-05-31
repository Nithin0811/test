const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes")
require("dotenv").config();
const app = express();
const PORT = 1000;

app.use(bodyParser.json());

app.use(cors());
app.use("/apiUser", userRoutes);
// app.use("/apiProducts", productsRoutes);

mongoose
    .connect(process.env.MONGODB)
    .then(() => {
        console.log("connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
    });
})
    .catch((error) => {
        console.error("Connection error", error.message);
    });

app.get("/name", (req, res) => {
    res.json(displayName("Nithin", "Sankar"));
});

const displayName = (firstName, lastName) => {
    return `Hey, ${firstName} ${lastName}!!!!`;
};