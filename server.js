'use strict';

var http = require('http');
var url = require('url');

//info goes from requestHandlers to routers to server

const PORT = process.env.PORT || 3000;

function start(route, handle) {
  function onRequest(request, response) {
    // var postData = '';
    var pathName = url.parse(request.url).pathname;
    console.log('Request for' + pathName + 'received');
    route(handle, pathName, response, request);
  }
  http.createServer(onRequest).listen(PORT);
  console.log(`Server up on ${PORT}`);
}


exports.start = start;
