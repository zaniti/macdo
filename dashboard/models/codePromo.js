const mongoose = require("mongoose");

const codePromoSchema = new mongoose.Schema({
  codePromo: {
    type: Number,
    required: true,
  },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
  },
});

module.exports = mongoose.model("codePromo", codePromoSchema);
