
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
  FirstName: {
    type: String
  },
  LastName:{
  type:String    
  },
  Email:{
    type:String
  },
  Password: {
    type: String
  }
},{
    collection: 'User'
});

module.exports = mongoose.model('User', User);