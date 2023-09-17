const Blog = require("../models/blogModel");

// @desc    Get all blogs
// @route   GET /api/blogs
const getBlogs = async (req, res) => {
  const blogs = await Blog.find();

  res.status(200).json(blogs);
};

// @desc    Get one blog
// @route   GET /api/blogs/:id
const getBlogById = async (req, res) => {};

// @desc    Create a blog
// @route   POST /api/blogs

// Rayhana
const createBlog = async (req, res) => {};

// @desc    Update a blog
// @route   PUT /api/blogs/:id
const updateBlog = async (req, res) => {};

// @desc    Delete a blog
// @route   DELETE /api/blogs/:id

// Rayhana
const deleteBlog = async (req, res) => {};

export { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog };
