'use strict';

var get_integer_interval = (number_a, number_b) => {
  if (number_a >= number_b) {
    return self_minus(number_a, number_b);

  } else {
    return self_add(number_a, number_b);
  }
}

var self_add = (number_a, number_b) => {
  var arr = [];
  for (let i = 0; i <= number_b - number_a; i++) {
    arr[i] = number_a + i;
  }
  return arr;
}

var self_minus = (number_a, number_b) => {
  var arr = [];
  for (let i = 0; i <= number_a - number_b; i++) {
    arr[i] = number_a - i;
  }
  return arr;
}

module.exports = get_integer_interval;

