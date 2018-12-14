'use strict';

function get_letter_interval_2(number_a, number_b) {
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
    if (arr[i] <= 26) {
      arr[i] = String.fromCharCode(96 + parseInt(arr[i]));
    } else if (26 < arr[i] <= 52) {
      arr[i] = 'a' + String.fromCharCode(96 + parseInt(arr[i] % 26));
    } else {
      arr[i] = 'b' + String.fromCharCode(96 + parseInt(arr[i] % 52));
    }
  }
  return arr;
  //在这里写入代码
}

module.exports = get_letter_interval_2;

