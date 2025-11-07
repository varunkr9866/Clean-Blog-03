const mongoose = require('mongoose')

const BlogPost = require('./models/BlogPost.js')

mongoose.connect('mongodb://0.0.0.0:27017/my_database');


var id ="633935305bb3958a3984359475e3"
BlogPost.findByIdAndUpdate(id,{title : 'update title'},(error,blogpost)=>{
    console.log(error,blogpost);
    
})

//Returning all the documents inside BlogPost Collection
BlogPost.find({},(error,blogpost)=>{
    console.log(error,blogpost);
    
})

//Using Regex to fine tune the search
BlogPost.find({title: /online/},(error,blogpost)=>{
    console.log(error,blogpost);
    
})

//Using unique ID to search the document
var id ="633935305bb3958a3984359475e3"
BlogPost.findById(id,(error,blogpost)=>{
    console.log(error,blogpost);
    
})

/*
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
*/