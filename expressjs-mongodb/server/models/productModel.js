const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    title: String, 
    author: String,
    
});

const productModel = mongoose.model("product", productSchema);
module.exports = productModel