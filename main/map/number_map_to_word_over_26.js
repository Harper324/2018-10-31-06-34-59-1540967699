'use strict';
var number_map_to_word_over_26 = collection => collection.map(element => {
  if (element <= 26) {
    return toString(96 + parseInt(element));
  }
  var firstCode = parseInt(Math.floor((element - 1) / 26)) + 96;
  var secondCode = parseInt((element - 1) % 26) + 97;
  return toString(firstCode) + toString(secondCode);
});

var toString = element => String.fromCharCode(element);


module.exports = number_map_to_word_over_26;
