var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";
mongo.connect(url,aggregate);
function aggregate(err,db){
  var docsCollection = db.collection("prices");

  var match = {
    $match  :  {size:process.argv[2]}
  };

  var group = {
    $group : {
      _id : 'average',
      average : {
        $avg : '$price'
      }
    }
  };

  docsCollection.aggregate([match,group]).toArray(printResults);

  db.close();
}

function printResults(err,data){
  console.log(Number(data[0].average).toFixed(2));
}
