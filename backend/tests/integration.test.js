import request from "supertest";
import app from "../src/server.js";

describe("Integration Testing - Job Portal", () => {

  test("Server is running", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });

  test("Login API responds correctly (integration check)", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "wrong@email.com",
        password: "wrongpassword"
      });

    expect(res.statusCode).toBe(401);
  });

  test("Jobs API is reachable (integration check)", async () => {
    const res = await request(app).get("/api/jobs");

    // status should not be server crash
    expect(res.statusCode).not.toBe(404);
  });

});
