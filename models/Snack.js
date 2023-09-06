const mongoose = require('./connection');

////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose using object destructuring
const { Schema, model } = mongoose;

// make snacks schema
const snacksSchema = new Schema({
  name: String,
  cost: Number,
  calories: Number
});

// make snack model
const Snack = model('Snack', snacksSchema);

module.exports = Snack;
