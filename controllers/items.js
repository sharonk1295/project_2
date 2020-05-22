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


// SHOW



// NEW 



// EDIT




// ========= FUNCTIONAL ROUTES ========= //

// CREATE



// UPDATE



// DESTROY



module.exports = itemController;