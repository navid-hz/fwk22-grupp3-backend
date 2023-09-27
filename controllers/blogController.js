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
const getBlogById = async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (blog) {
    return res.json(blog);
  } else {
    res.status(404);
    throw new Error("Blog not found");
  }
};

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
const updateBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const { title, content } = req.body;

    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({ error: "Blogpost not found" });
    }

    blog.title = title;
    blog.content = content;

    await blog.save();

    res.status(200).json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// @desc    Delete a blog
// @route   DELETE /blogs/:id

const deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const result = await Blog.deleteOne();

    if (!result) {
      return res.status(400).json({ error: "Blog post not found" });
    }
    res.status(200).json({ message: "Blog deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog };
