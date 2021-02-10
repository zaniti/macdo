const express = require("express");
const router = express.Router();
const category = require("../models/Category");

//Afficher tout les categories
router.get("/", async (req, res) => {
  try {
    const categories = await category.find();
    res.json(categories);
  } catch (err) {
    res.json({ message: err });
  }
});

//Add category
router.post("/addCategory", async (req, res) => {
  const cat = new category({
    name: req.body.name,
  });

  try {
    const saveCategory = await cat.save();
    res.json(saveCategory);
  } catch (err) {
    res.json({ message: err });
  }
});

//Find a category
router.get("/:id", async (req, res) => {
  try {
    const categoryId = await category.findById(req.params.id);
    res.json(categoryId);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update sub category
router.patch("/:id", async (req, res) => {
  try {
    const updateCategory = await category.updateOne(
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
    const deleteCategory = await category.remove({ _id: req.params.id });
    res.json(deleteCategory);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
