const mongoose = require('mongoose')


const BlogPost = require('./models/BlogPost.js')


mongoose.connect('',(err) =>{
    if(!err){
        console.log('DB Connected !!');
    }
    else{
        console.log('Not Connected',err);
        
    }
});