const { response } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const Products = require("../DB/Products");
const route = express.Router();

route.post('/', function(req, res) {
    let body = req.body;
    console.log(body);
    Products.updateOne({ _id: body._id }, {
            $set: {
                name: body.name,
                price: body.price,
                description: body.description,
                categoryId: body.categoryId,
                image: body.image
            }
        },
        function(err, name) {
            if (err) {
                res.json({
                    success: false,
                    msg: 'Couldn´t update the document',
                    err
                });
            } else {
                res.json({
                    success: true,
                    name: name
                })
            }
        }
    )
});

module.exports = route;