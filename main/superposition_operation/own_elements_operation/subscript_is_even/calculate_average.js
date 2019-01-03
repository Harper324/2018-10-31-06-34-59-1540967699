'use strict';
var calculate_average = collection => (get_even(collection)
    .reduce((a, b) => a + b)) / get_even(collection).length;
var get_even = element => element.filter((value, index) => index % 2 === 1);

module.exports = calculate_average;
