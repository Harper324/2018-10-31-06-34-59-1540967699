'use strict';

function get_letter_interval_2(number_a, number_b) {
  var array = series(number_a, number_b);
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
function series(number_a, number_b) {
  var arr = [];
  if (number_a >= number_b) {
    let lastIndex = number_a - number_b;
    for (let i = 0; i <= lastIndex; i++) {
      arr.push(number_a - i);
    }
  } else {
    let lastIndex = number_b - number_a;
    for (let i = 0; i <= lastIndex; i++) {
      arr.push(number_a + i);
    }
  }
  return arr;
}
module.exports = get_letter_interval_2;

