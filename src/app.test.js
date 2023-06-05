const app = require("./app");
const request = require("supertest");

describe("app.js endpoint tests", function () {
    test.skip("get informing valid question", async () => {
        const response = await request(app)
            .post("/question")
            .send({
                question: "Will Henrique get hired by Kenlo?"
            });
        expect(response).toBeTruthy();
        expect(response.status).toBe(200);
        expect(response.body.answer).toBeTruthy();
    }, 15000);

    test.skip("get not informing a question", async () => {
        const response = await request(app)
            .post("/question")
            .send({
                question: ""
            });
        expect(response).toBeTruthy();
        expect(response.status).toBe(400);
        expect(response.body.answer).toBeFalsy();
    }, 15000);
}); 