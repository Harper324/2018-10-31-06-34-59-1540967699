'use strict';

function get_union(collection_a, collection_b) { 
  var newArray = collection_a.concat(collection_b.filter(function(element){
    return !(collection_a.indexOf(element) > -1)
  }));
  return newArray;
 //在这里写入代码
}

module.exports = get_union;

