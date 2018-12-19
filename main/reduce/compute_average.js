'use strict';

function compute_average(collection) {
  var total = collection.reduce(function (a, b) {
    return a + b;
  })
  return total / collection.length;
}
module.exports = compute_average;

