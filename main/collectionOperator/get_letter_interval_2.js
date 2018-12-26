'use strict';
var get_integer_interval = require('../../main/collectionOperator/get_integer_interval.js');

var get_letter_interval_2=(number_a, number_b) => {
  var array = get_integer_interval(number_a, number_b);
  for (var j = 0; j < array.length; j++) {
    if (array[j] <= 26) {
      array[j] = String.fromCharCode(96 + parseInt(array[j]));
    } else {
      var firstCode = parseInt(Math.floor((array[j] - 1) / 26)) + 96;
      var secondCode = parseInt((array[j] - 1) % 26) + 97;
      array[j] = String.fromCharCode(firstCode) + String.fromCharCode(secondCode);
    }
  }
  return array;
}

module.exports = get_letter_interval_2;

