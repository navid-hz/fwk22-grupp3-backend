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
<<<<<<< HEAD

// Linn
const updateBlog = async (req, res) => {};
=======
const updateBlog = async (req, res) => {
  try {
    const blogId = req.params.id
    const { title, content } = req.body

    const blog = await Blog.findById(blogId)

    if (!blog) {
      return res.status(404).json({ error: 'Blogpost not found' })
    }

    blog.title = title
    blog.content = content

    await blog.save()

    res.status(200).json(blog)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Server Error'})
  }
};
>>>>>>> e9eee29f6ff2a96f36a375cd88acfba7c4ed45a0

// @desc    Delete a blog
// @route   DELETE /blogs/:id


const deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    


  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error'});
  }
};

module.exports = { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog };
