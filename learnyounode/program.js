var myclient = require('./myclient');
var collectedData;
myclient(process.argv[2],collected1);



function displayStreamData(err,data){
  console.log(data.length);
  console.log(data.toString());
}
function collected1(err,data){
  console.log(data.toString());
  myclient(process.argv[3],collected2);
}
function collected2(err,data){
  console.log(data.toString());
  myclient(process.argv[4],collected);
}
function collected(err,data){
  console.log(data.toString());
}
