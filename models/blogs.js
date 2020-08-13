const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define blog shema
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    snippet: {
        type: String,
        required: true
    },

    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

//define blog models
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;