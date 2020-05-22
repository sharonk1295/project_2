const {Schema, model} = require('mongoose');

const itemSchema = new Schema ({
    name: {type: String, required: true},
    brand: {type: String, required: true},
    type: {type: String, required: true},
    img: String,
    dateOpened: String,
    expiresIn: {type: Number, required: true},
    notes: String
}, {timestamps: true})

module.exports = model('Item', itemSchema);