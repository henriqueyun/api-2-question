const express = require("express");
const app = express();

app.use(express.json());

const { ask } = require("./openai");

app.get("/question", async (req, res) => {
    const { question } = req.query;
    if (!question) {
        return res.status(400).json({error: "you should inform a question through query param question"});
    }
    const { answer } = await ask(question);
    return res.status(200).json({answer});
});

module.exports = app;