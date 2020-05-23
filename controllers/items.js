const express = require('express');
const itemController = express.Router();
// Bring in mongoose and Item Schema
const mongoose = require('mongoose');
const Item = require('../models/items.js');


// ========= PRESENTATIONAL ROUTES ========= //

// INDEX
itemController.get('/', (req, res) => {
    Item.find({}, (error, allItems) => {
        const props = {
            items: allItems
        }
        res.render('Index', props)
    })
})

// NEW 
itemController.get('/add', (req,res) => {
    // res.send('add a new item/product')
    res.render('New')
})

// SHOW
itemController.get('/:id', (req,res) => {
    // res.send('I am an items show page')
    Item.findById(req.params.id, (error, foundItem) => {
        const props = {
            item: foundItem
        }
        res.render('Show', props);
    })
})

// EDIT
itemController.get('/edit/:id', (req,res) => {
    // res.send('edit by adding some opinions on the product')
    Item.findById(req.params.id, (error, foundItem) => {
        const props = {
            item: foundItem
        }
        res.render('Edit', props);
    })
})



// ========= FUNCTIONAL ROUTES ========= //

// CREATE
itemController.post('/', (req,res) => {
    Item.create(req.body, (error, newItem) => {
        res.redirect('/items');
    })
})


// UPDATE
itemController.put('/edit/:id', (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body, (error, updatedItem) => {
        res.redirect('/items');
    })
})


// DESTROY



module.exports = itemController;