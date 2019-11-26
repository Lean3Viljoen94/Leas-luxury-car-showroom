const mongoose = require('mongoose');

let carSchema = mongoose.Schema({
  model:{
      type:String,
      required:true
  },
  make:{
      type:String,
      required:true
  },
  regNr:{
      type:String,
      required:false,
  },
  currentOwner:{
    type:String,
    required:false,
    default: "unknown"
  }
});
module.exports = mongoose.model('cars', carSchema);