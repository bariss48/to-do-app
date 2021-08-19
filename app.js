const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mainRoute = require('./routes/quest');
try{
    var config = require('./config');
  }catch(e){
    console.log("db config down");
    console.log(e);
  }

app.set("view engine","ejs");
app.use(express.static('public'));

if(mongoose.connect(config.db.connection, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})){
    console.log('db connected');
}else{
    console.log('db down');
}


app.use('/',mainRoute);


app.listen('3000',() => {
    console.log('server active');
})