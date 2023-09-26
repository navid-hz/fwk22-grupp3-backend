/**
 * @group integration
 */

// describe('When testing jest', () => {
// 	describe('given i have a non failing test', () => {
// 		it('should be one', () => {
// 			expect(1).toBe(1)
// 		})
// 	})
// })

const request = require("supertest");
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || `http://localhost:${PORT}`;
const container = request(HOST);

// GET create blog test
describe("When testing /blogs", () => {
  describe("POST", () => {
    it("should work", async () => {
      const res = await request(app).post("/blogs").send({
        title: "Integration test title",
        content: "Integration test created",
      });
      expect(res.statusCode).toEqual(201);
    });
  });
});

// GET all blogs test
describe("When testing /blogs", () => {
  describe("GET", () => {
    it("should work", async () => {
      const res = await request(app).get("/blogs");
      expect(res.statusCode).toEqual(200);
      expect.arrayContaining(res.body);
    });
  });
});

// GET blog by ID test
describe("When testing /blogs/:id", () => {
  describe("GET", () => {
    it("should work", async () => {
      const res = await request(app).get("/blogs/650b06c006435bb82e7eaf31");
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("id");
    });
  });
});

// PUT edit blog test
describe("When testing /blogs/:id", () => {
  describe("PUT", () => {
    it("should work", async () => {
      const res = await request(app)
        .put("/blogs/650b06c006435bb82e7eaf31")
        .send({ title: "Edited Title", content: "New Content" });
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("id");
    });
  });
});

// DELETE blog test
describe("When testing /blogs/6509d7818e51b559deb980ca", () => {
  describe("DELETE", () => {
    it("should work", async () => {
      const res = await request(app).delete("/blogs/6509d7818e51b559deb980ca");
      expect(res.statusCode).toEqual(204);
    });
  });
});
