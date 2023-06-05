const { ask } = require("./index");

describe("OPENAI Public API Call Test", function() {
    test("simple question", async () => {
        const { answer } = await ask("Will Henrique be hired by Kenlo?");
        
        expect(answer).toBeTruthy();
    });

    test("empty question", async () => {
        const { answer } = await ask();

        expect(answer).toBeFalsy();
        expect(answer).toBe("");
    });
});