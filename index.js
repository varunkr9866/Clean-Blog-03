const express = require('express'); 


const ejs = require('ejs'); 

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_database',{useNewUrlPareser : true})