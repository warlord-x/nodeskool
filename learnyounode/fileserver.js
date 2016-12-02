function serveFile(port,filepath){
  var myhttp = require('http');
  var myfs = require('fs');
  var server = myhttp.createServer(function callback(request,response){
    var mysrcstream = myfs.createReadStream(filepath);
    mysrcstream.pipe(response);
  })
  server.listen(port)
}
module.exports = serveFile;
