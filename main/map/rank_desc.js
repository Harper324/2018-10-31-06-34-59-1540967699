'use strict';
var rank_desc = function(collection){
  var array = collection.sort(function(a,b){
    return a - b;
  });

  return array;
};

module.exports = rank_desc;
