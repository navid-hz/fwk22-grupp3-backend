const Blog = require("../models/blogModel");

// @desc    Get all blogs
// @route   GET /api/products
// @access  Public
const getBlogs = async (req, res) => {
  const blogs = await Blog.find();

  res.status(200).json(blogs);
};

// @desc    Get one blog
// @route   GET /api/blogs/:id
// @access  Public
const getBlogById = async (req, res) => {};

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createBlog = async (req, res) => {};

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = async (req, res) => {};

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = async (req, res) => {};

export { getBlogs, getBlogById, createBlog, updateProduct, deleteProduct };
