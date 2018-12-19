'use strict';

function spilt_to_zero(number, interval) {
  number = number * 10;
  interval = interval * 10;
  var array = [];
  while (number >= interval) {
    array.push(number / 10);
    number = number - interval;
  }

  array.push(number / 10);
  return array;
}

module.exports = spilt_to_zero;

