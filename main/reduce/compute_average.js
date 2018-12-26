'use strict';

var compute_average = collection => collection.reduce((a, b) => a + b) / collection.length;
module.exports = compute_average;

