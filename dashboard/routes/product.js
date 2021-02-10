const express = require("express");
const router = express.Router();
const product = require("../models/Product");

//Afficher tous les produits
router.get("/", async (req, res) => {
  try {
    const products = await product.find();
    res.json(products);
  } catch (err) {
    res.json({ message: err });
  }
});

//Ajouter un produit
router.post("/addProduct", async (req, res) => {
  const prod = new product({
    productName: req.body.productName,
    price: req.body.price,
    image: req.body.image,
    subCategory: req.body.id,
  });

  try {
    const saveProduct = await prod.save();
    res.json(saveProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

//Find a product
router.get("/:id", async (req, res) => {
  try {
    const productId = await product.findById(req.params.id);
    res.json(productId);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update a product
router.patch("/:id", async (req, res) => {
  try {
    const updateProduct = await product.updateOne(
      { _id: req.params.id },
      {
        $set: {
          productName: req.body.productName,
          price: req.body.price,
          image: req.body.image,
          subCategory: req.body.id,
        },
      }
    );
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete a product
router.delete("/:id", async (req, res) => {
  try {
    const deleteProduct = await product.remove({ _id: req.params.id });
    res.json(deleteProduct);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
