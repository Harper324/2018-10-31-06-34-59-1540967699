'use strict';
var get_integer_interval = require('../../main/collectionOperator/get_integer_interval.js');
var get_letter_interval = (number_a, number_b) => {
  return get_integer_interval(number_a, number_b).map(element => String.fromCharCode(96 + parseInt(element)))};
module.exports = get_letter_interval;
