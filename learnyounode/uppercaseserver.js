function uppercaseserve(port){
  var myhttp = require('http');
  var myfs = require('fs');
  var server = myhttp.createServer(function callback(request,response){

    var map = require('through2-map')
     request.pipe(map(function (chunk) {
       return chunk.toString().toUpperCase();
     })).pipe(response);
  })
  server.listen(port);
}
module.exports = uppercaseserve;
