const express = require('express');
const itemController = express.Router();
// Bring in mongoose and Item Schema
const mongoose = require('mongoose');
const Item = require('../models/items.js');


// ========= PRESENTATIONAL ROUTES ========= //

// INDEX
itemController.get('/', (req, res) => {
    res.render('Index')
})

// NEW 
itemController.get('/add', (req,res) => {
    res.send('add a new item/product')
})

// SHOW
itemController.get('/:id', (req,res) => {
    res.send('I am an items show page')
})

// EDIT
itemController.get('/edit/:id', (req,res) => {
    res.send('edit by adding some opinions on the product')
})



// ========= FUNCTIONAL ROUTES ========= //

// CREATE



// UPDATE



// DESTROY



module.exports = itemController;