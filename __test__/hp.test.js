const request = require("supertest");
const mongoose = require("mongoose");

const app = require("../index");

beforeEach(async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/my_applications");
}, 10000);

afterEach(async () => {
  await mongoose.connection.close();
});

describe("GET /", () => {
  it("Should return Hello World", async () => {
    const response = await request(app).get("/");
    expect(response.status).toEqual(200);
    expect(response.body.message).toBe("Hello World!");
  });
});

describe("GET /api/hp", () => {
  it("should get all hps", async () => {
    const response = await request(app).get("/api/hp");
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});

describe("POST /api/hp", () => {
  it("should return created object", async () => {
    const hp = {
      name: "Realme 7",
      year: 2020,
    };
    const response = await request(app).post("/api/hp").send(hp);

    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe("Realme 7");
    expect(response.body.year).toBe(2020);
  });
});

describe("GET /api/hp/<someId>", () => {
  it("should get an hp based on given id", async () => {
    const hp = {
      _id: {
        $oid: "65db4f90b25d566f72c6af31",
      },
      name: "Realme 7",
      year: 2020,
      __v: 0,
    };
    const response = await request(app)
      .get("/api/hp/65db4f90b25d566f72c6af31")
      .send(hp);
    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe("Realme 7 Pro");
    expect(response.body.year).toEqual(2020);
  });
});

describe("PUT /api/hp/<someId>", () => {
  it("should update hp based on given id", async () => {
    const hp = {
      name: "Realme 7 Pro",
      year: 2021,
    };

    const response = await request(app)
      .put("/api/hp/65db4f90b25d566f72c6af31")
      .send(hp);
    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe("Realme 7 Pro");
    expect(response.body.year).toEqual(2021);
  });
});

describe("DELETE /api/hp/<someId>", () => {
  it("should delete hp based on given id", async () => {
    const response = await request(app).delete(
      "/api/hp/65db4f90b25d566f72c6af31"
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("hp successfully deleted!");
  });
});
