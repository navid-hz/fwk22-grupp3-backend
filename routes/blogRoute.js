const express = require("express");
const router = express.Router();

import {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController";

router.route("/").get(getBlogs).post(createBlog);
router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);

export default router;
