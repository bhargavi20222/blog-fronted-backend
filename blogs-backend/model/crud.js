const mongoose = require('mongoose');

const blogListsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    fileprth: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('bloglists', blogListsSchema);