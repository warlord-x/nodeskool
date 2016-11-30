

function myExtFilter(dirName,ext,parentCallBack){
  var fs = require('fs');
  fs.readdir(dirName,impx(ext,parentCallBack));
}

function filterList(ext){
  return function abc(filename){
    if(filename.split('.')[1]==(ext)){
      return filename;
    }
  }
}

function impx(ext,parentCallBack){
  return function def(err,list){
    if(err)
      return parentCallBack(err);
    return parentCallBack(null,list.filter(filterList(ext)));
  }
}

module.exports = myExtFilter;
