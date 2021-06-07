const express = require('express');
const mongoose = require('mongoose');
const Category = require('../DB/Categories');
const route = express.Router();

route.post('/', async(req, res) => {
    const { name, image } = req.body;
    let category = {};
    category.name = name;
    category.image = image;
    let categoryModel = new Category(category);
    await categoryModel.save();
    res.json(categoryModel);
})

module.exports = route;