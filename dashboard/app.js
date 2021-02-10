require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
mongoose.connection
  .once("open", function () {
    console.log("Connected successfly");
  })
  .on("error", function (error) {
    console.log("Error");
  });

app.use(express.static(__dirname + "/McDonald-Brief/public"));
app.use(express.json());
const categoryRoute = require("./McDonald-Brief/routes/category.js");
app.use("/category", categoryRoute);

const subCategoyRoute = require("./McDonald-Brief/routes/subCategory.js");
app.use("/subCategory", subCategoyRoute);

const productRoute = require("./McDonald-Brief/routes/product.js");
app.use("/product", productRoute);

app.listen(5500, () => {
  console.log("I'm runing in port 5500");
});
