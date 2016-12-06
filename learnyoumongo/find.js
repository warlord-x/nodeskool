var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"+process.argv[2];
mongo.connect(url,update);
function update(err,db){
  var docsCollection = db.collection('users');
  //var person = {firstName:process.argv[2],lastName:process.argv[3]};
  //console.log(JSON.stringify(person));
  docsCollection.update({
    name:"Tina",
    age:30,
    username:"tinatime"
  },
  {
    $set:{
      age:40
    }
  },
  function(err, data) {
      console.log(data);
    });

  db.close();
}
