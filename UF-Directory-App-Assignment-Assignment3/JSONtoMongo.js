'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

/* Connect to your database */
mongoose.connect(config.db.uri)

/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */
 var mongooseConnection = mongoose.connection;
 mongooseConnection.on('connected', function() {
  console.log('Mongoose default connection open to mongodb');
  loadListings();
 });

 var listingObjects = null;
 var loadListings = function(){
  fs.readFile('listings.json', 'utf8', function(err,entries){

  if (err) throw err
  else{
    listingObjects = JSON.parse(entries);
    pushToMongoDb();
  }
 });
};

var pushToMongoDb = function(){
for (var entry in listingObjects["entries"]) {
        var toPush = new Listing(listingObjects["entries"][entry]);
        toPush.save(function (err) {
            if (err) throw err
              else
                console.log("Entry saved!");
        });
    };
};
/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
