var myclient = require('./myclient');
myclient(process.argv[2],displayStreamData);

function displayStreamData(err,data){
  console.log(data);
}
