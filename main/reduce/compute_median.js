'use strict';

function compute_median(collection) {
  var array = collection.sort(function (a, b) {
    return a - b;
  });
  if (array.length % 2 == 0) {
    let medianIndex = array.length / 2;
    return (array[medianIndex] + array[medianIndex - 1]) / 2;
  } else {
    let medianIndex = (array.length - 1) / 2;
    return array[medianIndex];
  }
  //在这里写入代码
}
module.exports = compute_median;


