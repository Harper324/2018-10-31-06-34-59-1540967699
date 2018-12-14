'use strict';

function compute_average(collection) {
  var total = collection.reduce(function (a, b) {
    return a + b;
  })
  var average = total / collection.length;
  return average;
  //在这里写入代码
}
module.exports = compute_average;

