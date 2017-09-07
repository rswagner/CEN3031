var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);
//Successful request
  if(request.method == 'GET' && parsedUrl.pathname == '/listings'){
      response.writeHead(200);
      response.end(listingData);
  }
  else{
    //Unsuccessful 
    response.writeHead(404);
    response.end('Bad gateway error');
  }
};
fs.readFile('listings.json', 'utf8', function(err, data) {
  listingData = data; 
  server = http.createServer(requestHandler); 
  server.listen(port, function() {
  console.log('Server listening on: localhost:' + port);  
  });
});