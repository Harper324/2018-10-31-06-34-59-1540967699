'use strict';
var map_to_four_multiples_add_one = function(collection){
  var array = collection.map(x => x * 4 + 1);
  return array;
};

module.exports = map_to_four_multiples_add_one;
