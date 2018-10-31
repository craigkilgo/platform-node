const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


const tx = new mongoose.Schema({
    customer: {
      type: String,
      trim: true,
      required: 'must have a customer to have a purchase!'
    },
    item: {
      type: String,
      trim: true,
      required: 'what item did the customer buy?'
    },
    price: {
      type: Number,
      required: 'come on.  it wasnt free!'
    }
  },
    {
      timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    });



module.exports = mongoose.model('transactions', tx);