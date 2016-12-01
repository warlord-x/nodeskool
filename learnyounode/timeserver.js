function sendDate(port){
  var net = require('net');
  var server = net.createServer(function connectionListener(socket){
    // "YYYY-MM-DD hh:mm"
    var date = new Date();
    var mystrftime = require('strftime');
    console.log(mystrftime('%F %H:%M',date));
    socket.end(mystrftime('%F %H:%M',date)+'\n');
  });
  server.listen(port);
}

module.exports = sendDate;
