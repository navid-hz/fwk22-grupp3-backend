const Blog = require("../models/blogModel");

// @desc    Get all blogs
// @route   GET /api/products
// @access  Public
const getBlogs = async (req, res) => {
  const blogs = await Blog.find();

  res.status(200).json(blogs);
}
 
// @desc    Get one blog
// @route   GET /api/blogs/:id
// @access  Public
const getBlogById = async (req, res) => {

  const blog = await Blog.findById(req.params.id);
  if (blog) {
    return res.json(blog);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
};

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createBlog = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample name",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "Sample brand",
    category: "Sample category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample description",
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await Product.deleteOne({ _id: product._id });
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

/

export {
  getBlogs,
  getBlogById,
  createProduct,
  updateProduct,
  deleteProduct,
};
