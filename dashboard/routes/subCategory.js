const express = require("express");
const router = express.Router();
const subCategory = require("../models/subCategory");

//Afficher tout les categories
router.get("/", async (req, res) => {
  try {
    const subCategories = await subCategory.find();
    res.json(subCategories);
  } catch (err) {
    res.json({ message: err });
  }
});

//Add sub category
router.post("/addSubCategory", async (req, res) => {
  try {
    const subcat = new subCategory({
      name: req.body.name,
      category: req.body.id,
    });
    const saveSubCategory = await subcat.save();
    res.json(saveSubCategory);
  } catch (err) {
    res.json({ message: err });
  }
});

//Find a sub category
router.get("/:id", async (req, res) => {
  try {
    const subCategoryId = await SubCategory.findById(req.params.id);
    res.json(subCategoryId);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update sub category
router.patch("/:id", async (req, res) => {
  try {
    const updateSubCategory = await SubCategory.updateOne(
      { _id: req.params.id },
      { $set: { name: req.body.name } }
    );
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete sub category
router.delete("/:id", async (req, res) => {
  try {
    const deleteSubCategory = await SubCategory.remove({ _id: req.params.id });
    res.json(deleteSubCategory);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
