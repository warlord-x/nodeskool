function getData(url,parentCallBack){

  var http = require('http');
  http.get(url,urlCallBack(parentCallBack));

}

function urlCallBack(parentCallBack){
  return function abc(response){
    response.setEncoding('utf8');
    response.on("data", function (data) {
      parentCallBack(null,data);
    });
    response.on("error", function (error) {
      parentCallBack(error);
    });
  }
}
module.exports = getData;
