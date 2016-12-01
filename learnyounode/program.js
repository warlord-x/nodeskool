var myclient = require('./myclient');
var async = require('async');

function collected(err,data){
  //console.log("collected callled::"+data.toString());
  console.log(data.toString());
}

//Set up our queue
var queue = async.queue(function(url, collectedX) {
  //console.log('calling url:'+url);
    myclient(url,collectedX);

}, 1); //Only allow 1 copy requests at a time so we don't flood the network



queue.push(process.argv[2],collected);
queue.push(process.argv[3],collected);
queue.push(process.argv[4],collected);
