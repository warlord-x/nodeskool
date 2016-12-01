function getData(url,parentCallBack){

  var http = require('http');

  http.get(url,urlCallBack(parentCallBack));

}

function urlCallBack(parentCallBack){
  return function abc(response){
    var bl = require('bl');
     response.pipe(bl(function (err, data) {
       parentCallBack(err,data)
    }))
  }
}



module.exports = getData;
