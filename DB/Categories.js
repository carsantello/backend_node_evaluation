const mongoose = require('mongoose');

const category = new mongoose.Schema({
    "name": {
        type: String
    },
    "image": {
        type: String
    }
});

module.exports = Categories = mongoose.model('category', category);