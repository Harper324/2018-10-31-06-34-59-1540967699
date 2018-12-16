'use strict';

function get_letter_interval_2(number_a, number_b) {
  var array = series(number_a, number_b);
  for (var j = 0; j <= array.length; j++) {
    if (array[j] <= 26) {
      array[j] = String.fromCharCode(96 + parseInt(array[j]));
    } else {
      var firstCode = Math.floor((array[j] - 1) / 26) + 96;
      var secondCode = (array[j] - 1) % 26 + 97;
      array[j] = String.fromCharCode(firstCode, secondCode);
    }
  } 
  return array;
  function series(number_a, number_b) {
    var arr = [];
    if (number_a >= number_b) {
      let lastIndex = number_a - number_b;
      for (var i = 0; i <= lastIndex; i++) {
        arr[i] = number_a - i;
      }
    } else {
      let lastIndex = number_b - number_a;
      for (var i = 0; i <= lastIndex; i++) {
        arr[i] = number_b + i;
      }
    }
    return arr;
  }

  //在这里写入代码
}
console.log(get_letter_interval_2(20, 53));
module.exports = get_letter_interval_2;

