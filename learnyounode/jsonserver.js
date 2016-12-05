function giveTime(port){
  var myhttp = require('http');
  var myfs = require('fs');
  var server = myhttp.createServer(function callback(request,response){
    var myurl = require('url');
    var urlObj = myurl.parse(request.url, true);
    if(urlObj.pathname=="/api/parsetime"){
      var mydate = new Date(urlObj.query.iso);
      var mystrftime = require('strftime');
      response.writeHead(200,{'Content-Type': 'application/json'});
      var timeX = {"hour":mydate.getHours(),"minute":mydate.getMinutes(),"second":mydate.getSeconds()};
      response.write(JSON.stringify(timeX), 'utf8');

      response.end();
    }
    else{
      var mydatex = new Date(urlObj.query.iso);
      var mydateUnix = {"unixtime":mydatex.getTime()};
      response.writeHead(200,{'Content-Type': 'application/json'});
      response.write(JSON.stringify(mydateUnix),'utf8');
      response.end();
    }
  })
  server.listen(port);
}
module.exports = giveTime;
