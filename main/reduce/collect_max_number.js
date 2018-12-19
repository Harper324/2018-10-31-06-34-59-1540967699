'use strict';

function collect_max_number(collection) {
  var array = collection.sort(function(a,b){
    return b - a;
  });

  return array[0];

}


module.exports = collect_max_number;
