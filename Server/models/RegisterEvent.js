var mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence')(mongoose);

// Create the MovieSchema.
var EventRegSchema = new mongoose.Schema({
   id:{
       type : Number,
       required : true ,
   },
   firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phoneNo : {
      type: String,
      required :true
  },
  email : {
      type :String,
      required : true
  },
  image : {
     data: Buffer, 
     contentType: String 
  },
  regType : {
      type: String,
      required: true
  },
  noOfTickets : {
      type : Number,
      required : true
  },
  regDate :{
      type : Date,
      required : true
  }
});

// Export the model.
//EventRegSchema.plugin(AutoIncrement, {inc_field: 'id'});
module.exports = mongoose.model('registerEvent', EventRegSchema);