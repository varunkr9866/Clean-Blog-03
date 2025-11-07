const mongoose = require('mongoose')


const BlogPost = require('./models/BlogPost.js')


mongoose.connect('mongodb://0.0.0.0:27017/my_database');

const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title : String,
    body : String
})