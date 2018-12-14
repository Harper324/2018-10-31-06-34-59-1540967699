'use strict';
var rank_asc = function(collection){
  var array = collection.sort(function(a,b){
    return b - a;
  });

  return array;
};


//module.exports = rank_asc;
