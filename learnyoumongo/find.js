var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";
mongo.connect(url,count);
function count(err,db){
  var docsCollection = db.collection("parrots");
  docsCollection.count({
  age:{$gt:+process.argv[2]}
  },
  function(err, data) {
      console.log(data);
    });

  db.close();
}
