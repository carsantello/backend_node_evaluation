const { response } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const Categories = require('../DB/Categories');
const route = express.Router();

route.delete('/:id', function(req, res) {
    var id = req.params.id;

    Categories.findByIdAndDelete(id, function(err, id) {
        if (err) {
            return res.json({
                success: false,
                msj: 'Message error',
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