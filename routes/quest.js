const express = require('express');
const router = express.Router();
const todo = require('../models/todo');

router.get("/", async (req,res) => {
    try{
        const todos = await todo.find().exec();
        res.render('index',{todos});
    }catch(err){
        console.log(err);
        res.send("hata hata");
    }
})

router.post('/',async (req,res) => {
    const newList = {
        title: req.body.title,
        quest: req.body.quest,
        date:req.body.date,
    } 
     try {
      const todos = await todo.create(newList);
      res.redirect('/');
    } catch (err) {
        res.redirect('/');
        console.log(err);
    }
})

module.exports = router;