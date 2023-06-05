require("dotenv").config();
const connect = require("./db/connect");
const app = require("./app");

connect(process.env.DB_URL).then(
    () => {
        console.log("Connected to database");
        app.listen(process.env.PORT, () => {
            console.log("Question API listening at port:", process.env.PORT);
        });
    }).catch(err => {
        console.log("Error connecting to database:", err.message);
    });