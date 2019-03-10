const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for LoginModel
const LoginModel = new Schema({
  username: {
    type: String
  },
  mailId: {
      type: String
  }
},{
    collection: 'userDetails'
});

module.exports = mongoose.model('LoginModel', LoginModel);