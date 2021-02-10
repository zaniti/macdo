const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
// const product = require("./product.js");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  subCategory: {
    type: Schema.ObjectId,
    ref: "subCategory",
  },
});
module.exports = mongoose.model("product", productSchema);
