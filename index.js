const express=require('express');
const dotenv=require('dotenv').config();
const port=process.env.port||8000;
const app=express();
const path=require('path');
// enabling body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// middleware for html .css file
app.use(express.static(path.join(__dirname,'public')));


app.use('/openai',require('./routes/openroutes'));
app.listen(port,()=> console.log(`Server started on ${port}`));


