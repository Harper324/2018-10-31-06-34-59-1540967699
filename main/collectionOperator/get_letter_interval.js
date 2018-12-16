'use strict';

function get_letter_interval(number_a, number_b) {
  var array = get_integer_interval(number_a, number_b);
  return array.map(function (element) {
    return String.fromCharCode(96 + parseInt(element));
  });
}
function get_integer_interval(number_a, number_b) {
  if (number_a >= number_b) {
    let lastIndex = number_a - number_b;
    for (i = 0; i <= lastIndex; i++) {
      var arr = [];
      arr[i] = number_a - i;
    }
  } else {
    let lastIndex = number_b - number_a;
    for (i = 0; i <= lastIndex; i++) {
      var arr = [];
      arr[i] = number_b + i;
    }
  }
  return arr;
}
module.exports = get_letter_interval;
