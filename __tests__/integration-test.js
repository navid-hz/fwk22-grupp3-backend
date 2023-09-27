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
      const res = await container.post("/blogs").send({
        title: "Integration test title",
        content: "Integration test content",
      });
      expect(res.statusCode).toEqual(201);
    });
  });
});

// GET all blogs test
describe("When testing /blogs", () => {
  describe("GET (All)", () => {
    it("should work", async () => {
      const res = await container.get("/blogs");
      expect(res.statusCode).toEqual(200);
      expect.arrayContaining(res.body);
    });
  });
});

// GET blog by ID test
describe("When testing /blogs/:id", () => {
  describe("GET", () => {
    it("should work", async () => {
      const res = await container.get("/blogs/65148402cfa32d8684c8010d");
      expect(res.statusCode).toEqual(200);
    });
  });
});

// PUT edit blog test
describe("When testing /blogs/:id", () => {
  describe("PUT", () => {
    it("should work", async () => {
      const res = await container
        .put("/blogs/65148402cfa32d8684c8010d")
        .send({ title: "Int edited Title", content: "Int edited Content" });
      expect(res.statusCode).toEqual(200);
    });
  });
});

// DELETE blog test
describe("When testing /blogs/:id", () => {
  describe("DELETE", () => {
    it("should work", async () => {
      const res = await container.delete("/blogs/651486de7ec1ab1e5fedbf62");
      expect(res.statusCode).toEqual(200);
    });
  });
});
