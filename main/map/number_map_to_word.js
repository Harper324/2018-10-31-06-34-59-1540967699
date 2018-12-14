'use strict';
var number_map_to_word = function(collection){
  var array = collection.map(function(element) {
    return String.fromCharCode(96 + parseInt(element));
  })
  return array;
};
module.exports = number_map_to_word;
