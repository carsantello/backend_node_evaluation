const { response } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const Products = require("../DB/Products");
const route = express.Router();

route.get('/', function(req, res) {
    var name = req.params.products;
    Products.find({ Products, Products }, function(err, name) {
        if (err) {
            return res.json({
                success: false,
                msj: 'Message error',
                err
            });
        } else {
            return res.json({
                success: true,
                name: name
            });
        }
    })
});

module.exports = route;