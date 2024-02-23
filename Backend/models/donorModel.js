const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
    donorName : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    address : {
        type: String,
        required: true
    },
  });
  const Donor = mongoose.model('Donor', donorSchema);
  
  module.exports =  Donor;