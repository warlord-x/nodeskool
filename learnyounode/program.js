//console.log("HELLO WORLD");
total = 0;
for(i=2;i<process.argv.length;i++){
  total = total + Number(process.argv[i]);
}
//console.log(total);
var fs = require('fs');

//fs.readdir(process.argv[2],callBackFileList);

//var mymodule = require('./mymodule');
//console.log(mymodule);

//mymodule(process.argv[2],process.argv[3],displayList);

var myclient = require('./myclient');
myclient(process.argv[2],displayStreamData);

function displayList(err,data){
  //console.log(data);
  data.filter(function (filename){

console.log(filename);

  });

}

function displayStreamData(err,data){
  console.log(data);
}
