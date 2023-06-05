const app = require("./app");
const request = require("supertest");

describe("app.js endpoint tests", function () {
    test("get informing valid question", async () => {
        const response = await request(app)
            .get("/question?question=Will Henrique get hired by Kenlo?");
        expect(response).toBeTruthy();
        expect(response.status).toBe(200);
        expect(response.body.answer).toBeTruthy();
    });

    test("get not informing a question", async () => {
        const response = await request(app)
            .get("/question?question=");
        expect(response).toBeTruthy();
        expect(response.status).toBe(400);
        expect(response.body.answer).toBeFalsy();
    });
}, 30000); 