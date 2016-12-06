var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"+process.argv[2];
mongo.connect(url,remove);
function remove(err,db){
  var docsCollection = db.collection(process.argv[3]);
  //var person = {firstName:process.argv[2],lastName:process.argv[3]};
  //console.log(JSON.stringify(person));
  docsCollection.remove({
  _id:process.argv[4]
  },
  function(err, data) {
      console.log(data);
    });

  db.close();
}
