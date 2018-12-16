'use strict';
function get_integer_interval_2(number_a, number_b) {
  var array = get_integer_interval(number_a, number_b);
  return array.filter(function (element) {
    return element % 2 === 0;
  });
  function get_integer_interval(number_a, number_b) {
    var arr = [];
    if (number_a === number_b && number_a % 2 !== 0) {
      return [number_a];
    } else if (number_a >= number_b) {
      let lastIndex = number_a - number_b;
      for (var i = 0; i <= lastIndex; i++) {
        arr[i] = number_a - i;
      }
      return arr;
    } else {
      let lastIndex = number_b - number_a;
      for (var i = 0; i <= lastIndex; i++) {
        arr[i] = number_b + i;
      }
      return arr;
    }
  }
}
module.exports = get_integer_interval_2;
