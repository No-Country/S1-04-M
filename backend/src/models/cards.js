const mongoose = require('mongoose');
const {Schema, model} = require ('mongoose'); 
const bcrypt = require('bcryptjs');

const cardSchema = new Schema({
    number: { type: String, required: true},
    user_id: { type: String, required: true},
    user_name: { type: String, required: true},
    balance: {type: Number, required: true},
    active: {type: Boolean, default: true}, 
    internal: {type: Boolean, default: true}, 
    cvv:{type:Number, required: true}, 
    date:{type:String, required: true}
     
});

const NextCardNumberSchema = new Schema({
    nextCarNumber: { type: String, required: true}
})


module.exports = model ('Card', cardSchema);
module.exports = model ('NextCardNumberSchema', NextCardNumberSchema);
