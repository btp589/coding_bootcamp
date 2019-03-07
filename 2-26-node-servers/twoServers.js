// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT1 = 7000;
var PORT2 = 7500;

// Create a generic function to handle requests and responses
function handleRequest1(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("Our greatest glory is not in never falling, but in rising every time we fall. — Confucius");
}

function handleRequest2(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("All our dreams can come true, if we have the courage to pursue them. – Walt Disney");
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server1 = http.createServer(handleRequest1);

// Start our server so that it can begin listening to client requests.
server1.listen(PORT1, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT1);
});


var server2 = http.createServer(handleRequest2);

server2.listen(PORT2, function() {
  console.log("Server listening on: http://localhost:" + PORT2);
});