const Blog = require("../models/blogModel");

// @desc    Get all blogs
// @route   GET /blogs
const getBlogs = async (req, res) => {
  const blogs = await Blog.find();

  console.log(blogs);

  res.status(200).json(blogs);
};

// @desc    Get one blog
// @route   GET /blogs/:id
const getBlogById = async (req, res) => {};

// @desc    Create a blog
// @route   POST /blogs
const createBlog = async (req, res) => {
  const { title, content } = req.body;

  try {
    const newBlog = new Blog({
      title,
      content,
    });

    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// @desc    Update a blog
// @route   PUT /blogs/:id

// Linn
const updateBlog = async (req, res) => {};

// @desc    Delete a blog
// @route   DELETE /blogs/:id

// Rayhana
const deleteBlog = async (req, res) => {};

module.exports = { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog };
