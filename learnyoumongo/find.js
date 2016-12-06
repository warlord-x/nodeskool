var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";
mongo.connect(url,insert);
function insert(err,db){
  var docsCollection = db.collection('docs');
  var person = {firstName:process.argv[2],lastName:process.argv[3]};
  console.log(JSON.stringify(person));
  docsCollection.insert(person,function(err, data) {
      // handle error

      // other operations
    });

  db.close();
}
