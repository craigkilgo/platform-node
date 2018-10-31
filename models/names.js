const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


const names = new mongoose.Schema({
    name: {
      type: String,
      trim: true,
      required: 'must have a name'
    },
    friends: {
      type: String,
      trim: true,
      required: 'must have friends'
    },
    id: {
      type: Number,
      required:true
    }
  });



module.exports = mongoose.model('names', names);