'use strict';

var spilt_to_zero = (number, interval) => {
  number = number * 10;
  interval = interval * 10;
  var array = [];
  while (number > 0) {
    array.push(number / 10);
    number = number - interval;
  }

  array.push(number / 10);
  return array;
}

module.exports = spilt_to_zero;

