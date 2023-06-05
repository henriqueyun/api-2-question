const express = require("express");
const app = express();

app.use(express.json());

const { ask } = require("./openai");
const { saveQuestion } = require("./save-question");

app.post("/question", async (req, res) => {
    const { question, userId } = req.body;

    const error = validatePayload({question, userId});
    if(error) {
        return res.status(400).json({ error });
    }

    const { answer } = await ask(question);
    const user = await saveQuestion({ id: userId, question, answer });
    return res.status(200).json({ user });
});

function validatePayload({ question, userId }) {
    if (!question) {
        return "you should inform a question through \"question\"query param";
    }
    if (!userId) {
        return "you should inform a question through \"userId\"query param";
    }
}

module.exports = app;