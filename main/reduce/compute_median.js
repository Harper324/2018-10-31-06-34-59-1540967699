'use strict';

var compute_median = collection => {
  var array = collection.sort((a, b) => a - b);
  var lowMiddle = Math.floor((array.length - 1) / 2);
  var highMiddle = Math.ceil((array.length - 1) / 2);
  return (Number(array[lowMiddle]) + Number(array[highMiddle])) / 2;
}
module.exports = compute_median;


