/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   Listing.find({name: 'Library West'}, function(err, documentData){
    if(err) {throw err}; 
    console.log(documentData);
   });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
    Listing.findOneAndRemove({code:'CABL'}, function(err, documentData) {
      if(err) {throw err}; 

        console.log(documentData);
        console.log('CABL deleted!');
    });
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
       Listing.findOneAndUpdate({ name: 'Phelps Laboratory' }, { address: 'new address' }, function(err, docToUpdate) {
          if(err) {throw err}; 
        // we have the updated user returned to us
        Listing.find({ name: 'Phelps Laboratory' }, function(err, documentData) {
          if(err) {throw err}; 
            console.log(documentData);
        });
    });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
     Listing.find({}, function (err, documentData) {
          if(err) {throw err}; 
      console.log(documentData);
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
