const express = require('express');
const path = require('path');
const route = require("./Routes/route");
const web = require("./Routes/web")
const url =require("url")
const ConnectDB  = require("./db/connectiondb")
const app = express();
const session =require("express-session")
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const port = process.env.PORT || '4000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/"

//db connection 
ConnectDB(DATABASE_URL)



app.use(session({secret:"_HqKu'=5a>`EwvjA", resave:false, saveUninitialized:true,cookie: { maxAge: 1*60*60*1000
  }}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/Views'));
app.use(express.static(__dirname + '/public/'));


app.use("/",web)


//handle not matching request from client 





app.set('view engine', 'ejs')
app.listen(4000);
console.log("server running on port 4000");












// app.post("/profile", upload.single('selectedfile'), function(req,res,next){
//   console.log(req.body)
//   console.log(req.file)
//   next()
// })

// app.get("/profile", function(req,res,){
//   res.render("profile")
// })









