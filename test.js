const mongoose = require('mongoose')


const BlogPost = require('./models/BlogPost.js')


mongoose.connect('mongodb://0.0.0.0:27017/my_database');

const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title : String,
    body : String
});

const BlogPost = mongoose.model('BlogPost',BlogPostSchema);

BlogPost.create({
     title : 'How to create an online blog',
    body : 'just write something & Submit buddy'
},(error,blogpost) =>{
    console.log(error,blogpost);
    
});