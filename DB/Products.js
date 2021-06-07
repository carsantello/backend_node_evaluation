const mongoose = require('mongoose');

const product = new mongoose.Schema({
    "name": {
        type: String
    },
    "price": {
        type: Number
    },
    "description": {
        type: String
    },
    "categoryId": {
        type: Number
    },
    "image": {
        type: String
    }
});

module.exports = Products = mongoose.model('product', product);