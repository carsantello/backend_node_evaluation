const express = require('express');
const mongoose = require('mongoose');
const Products = require('../DB/Products');
const route = express.Router();

route.post('/', async(req, res) => {
    const { name, price, description, categoryId, image } = req.body;
    let product = {};
    product.name = name;
    product.price = price;
    product.description = description;
    product.categoryId = categoryId;
    product.image = image;
    let productModel = new Products(product);
    await productModel.save();
    res.json(productModel);
})

module.exports = route;