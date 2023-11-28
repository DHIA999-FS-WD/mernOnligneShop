const express = require("express");
const {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");

const router = express.Router();

const protect = require("../middlewares/authMiddleware");

// POST :  ADD A NEW Product TO THE DATABASE
router.post("/add", protect, createProduct);
//   GET :  RETURN ALL Product
router.get("/all", getProducts);
//   GET :  RETURN ONE Product BY ID
router.get("/:id", protect, getProduct);
//   delete :  delete ONE Product BY ID
router.delete("/:id", protect, deleteProduct);
//  PUT : EDIT AND UPDATE A Product BY ID
router.put("/:_id", protect, updateProduct);

module.exports = router;
