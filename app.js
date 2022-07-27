//! Imported Modules
const express = require('express');
const fs = require('fs')
const path = require('path');

//! Created an express app
const app=express();

//! Created a port
const port = 80;

//! Express Stuff
app.use('/static', express.static('static'))
app.use(express.urlencoded())

//! Pug Stuff
app.set('view engine','pug') //* Setting the template engine
app.set('views', path.join(__dirname, 'views')) //* Setting the views directory

//!Endpoints
app.get('/',(req,res)=>{
    const title = {"title": "Rahul's Dance Academy"}
    res.status(200).render('home.pug',title)
})
app.get('/contact',(req,res)=>{
    const title = {"title": "Rahul's Dance Academy"}
    res.status(200).render('contact.pug',title)
})

//! Straing the Server
app.listen(port, ()=>{
    console.log(`The port is started on port ${port}`)
})