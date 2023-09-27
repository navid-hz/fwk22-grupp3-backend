/**
 * @group component
 */

// describe('When testing jest', () => {
// 	describe('given i have a non failing test', () => {
// 		it('should be one', () => {
// 			expect(1).toBe(1)
// 		})
// 	})
// })

const request = require("supertest");
const app = require("../server");

// POST create blog test
describe("When testing /blogs", () => {
  describe("POST", () => {
    it("should work", async () => {
      const res = await request(app)
        .post("/blogs")
        .send({ title: "Food", content: "Food Blog" });
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
      const res = await request(app).get("/blogs/65146916aabcbbdf613dd59e");
      expect(res.statusCode).toEqual(200);
    });
  });
});

// PUT edit blog test
describe("When testing /blogs/:id", () => {
  describe("PUT", () => {
    it("should work", async () => {
      const res = await request(app)
        .put("/blogs/65146916aabcbbdf613dd59e")
        .send({ title: "Food Blog", content: "New Content" });
      expect(res.statusCode).toEqual(200);
    });
  });
});

// DELETE blog test
describe("When testing /blogs/65146916aabcbbdf613dd59e", () => {
  describe("DELETE", () => {
    it("should work", async () => {
      const res = await request(app).delete("/blogs/65146916aabcbbdf613dd59e");
      expect(res.statusCode).toEqual(204);
    });
  });
});
