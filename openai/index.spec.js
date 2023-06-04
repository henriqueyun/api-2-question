const { question } = require("./index");

describe("OPENAI Public API Call Test", function() {
    test("Chat Completion", async () => {
        const answer = await question("Will Henrique be hired by Kenlo?");
        expect(answer).not.toBe("Sorry, couldn't hit Open AI Public API");
    });
});