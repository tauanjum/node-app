const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
    it("responds with proper message", (done) => {
        request(app).get("/").expect("{\"msg\":\"Hello from NodeJs server\"}", done);
    })
});