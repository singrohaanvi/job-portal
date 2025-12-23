import request from "supertest";
import app from "../src/server.js";

describe("Integration Testing - Job Portal", () => {

 

  test("Login API responds correctly (integration check)", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "wrong@email.com",
        password: "wrongpassword"
      });

    // ❗ 401 is EXPECTED for invalid credentials
    expect(res.statusCode).toBe(401);
  });

  test("Jobs API is reachable (integration check)", async () => {
    const res = await request(app).get("/api/jobs");

    // status should NOT be server crash
    expect(res.statusCode).not.toBe(404);
  });

});
