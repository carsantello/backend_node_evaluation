const { response } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const Categories = require("../DB/Categories");
const route = express.Router();

route.get('/', function(req, res) {
    let name = req.params.categories;
    Categories.find({ Products, Products }, function(err, name) {
        if (err) {
            return res.json({
                success: false,
                msj: 'Couldn´t find a category',
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