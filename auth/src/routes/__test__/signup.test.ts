import request from "supertest";

import { app } from "../../app";

it("returns a 201 on successfull login", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test@gmail.com",
      password: "password",
    })
    .expect(201);
});
