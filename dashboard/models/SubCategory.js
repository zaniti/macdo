const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const subCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.ObjectId,
    ref: "Category",
  },
});
module.exports = mongoose.model("subCategory", subCategorySchema);
