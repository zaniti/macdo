const express = require("express");
const router = express.Router();
const admin = require("../models/Admin");

router.get("/",function(req,res){
    var email =req.body.username,
    var password = req.body.password,

})
