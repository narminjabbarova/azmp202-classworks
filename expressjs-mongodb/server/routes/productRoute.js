const express = require("express");

const {
    getAllProducts,
    deleteProduct,
    postProduct,
    putProduct
} = require ("../controllers/productController")

const router = express.Router();
router.get("/", getAllProducts);
router.delete("/:id", deleteProduct);
router.post("/", postProduct);
router.put("/:id", putProduct);
module.exports = router;
