const assert = require('assert');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recruteurSchema = new Schema ({
  name: {
    type: String,
    required: true
},
age: {
    type:Number,
    required: true
},
phone: {
    type: Number,
    required: true
},
email: {
    type: String,
    required: true
},
address: {
  type: String,
  required: true
},
user_name: String,
password: {
    type: String,
    required: true
},
entreprise : String,
poste : String
});

const recruteur = mongoose.model("recruteur", recruteurSchema);
module.exports = recruteur;