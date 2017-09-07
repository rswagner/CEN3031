/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var listingSchema = new Schema({
    code: {type: String, required: true, unique: true},
    name: {type: String, required: true, unique: false},
    coordinates:{
        latitude: {type: Number, required: false, unique: false},
        longitude: {type: Number, required: false, unique: false}
    },
    address:{type: String, required: false, unique: false}
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
listingSchema.pre('save', function(next) {
  var date = new Date(); 
  this.update_at = date; 
  if(!this.created_at){
  	this.created_at = date; 
  }
  //We cycle to add the update_add property 
  next(); 

});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
