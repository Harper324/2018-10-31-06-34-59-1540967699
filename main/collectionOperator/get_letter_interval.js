'use strict';

function get_letter_interval(number_a, number_b) {
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
  for (i = 0; i <= arr.length; i++) {
    arr[i] = String.fromCharCode(96 + parseInt(arr[i]));
  }
  return arr;
  //在这里写入代码
}

module.exports = get_letter_interval;
