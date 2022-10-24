const express= require('express');
const admin=require('firebase-admin');
const bcrypt=require('bcrypt')
const path=require('path');

//declare static path

const staticPath= path.join(__dirname, "public");

//initialize
const app= express();
//middleware
app.use(express.static(staticPath));

//route
app.get('/', (req, res)=>{
    res.sendFile(path.join(staticPath, "index.html"));
})
app.get('/singup', (req, res)=>{
    res.sendFile(path.join(staticPath, "singup.html"));

})
app.use((req, res)=>{
    res.sendFile(path.join(staticPath));
})
app.listen(3000,()=>{
    console.log('listening on port 3000');
})