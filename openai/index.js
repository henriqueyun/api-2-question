require("dotenv").config();

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function question(prompt) {
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
    });

    if (response.status !== 200) {
        return "Sorry, couldn't hit Open AI Public API";
    }
    return response.data.choices[0].message.content;
}

module.exports = {
    question
};