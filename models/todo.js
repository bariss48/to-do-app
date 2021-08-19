const { text } = require('express');
const mongoose = require('mongoose');

const todo = new mongoose.Schema({
    title: String,
    quest: String,
    date: Date,
});

module.exports = mongoose.model("todo",todo);