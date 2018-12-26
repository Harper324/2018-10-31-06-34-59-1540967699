'use strict';
var get_integer_interval = require('../../main/collectionOperator/get_integer_interval.js');
var get_integer_interval_2 = (number_a, number_b) => {
  return get_integer_interval(number_a, number_b).filter(element => element % 2 === 0);
};

module.exports = get_integer_interval_2;
