const { response } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const Categories = require("../DB/Categories");
const route = express.Router();

route.get('/:id', function(req, res) {
    let id = req.params.id;

    Categories.findById(id, function(err, id) {
        if (err) {
            return res.json({
                success: false,
                msj: 'Couldn´t find a product',
                err
            });
        } else {
            return res.json({
                success: true,
                name: id
            });
        }
    })
});

module.exports = route;