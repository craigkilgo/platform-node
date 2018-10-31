const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


const fiftyValues = new mongoose.Schema({
    value: {
      type: String,
      trim: true,
      required: 'must have a value'
    }
  });



module.exports = mongoose.model('fiftyValues', fiftyValues);