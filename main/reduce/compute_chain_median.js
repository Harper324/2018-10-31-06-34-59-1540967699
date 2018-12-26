'use strict';

var compute_chain_median = collection => {
  var array = collection.split('->').sort((a, b) => a - b);
  var lowMiddle = Math.floor((array.length - 1) / 2);
  var highMiddle = Math.ceil((array.length - 1) / 2);

  return (Number(array[lowMiddle]) + Number(array[highMiddle])) / 2;
}
module.exports = compute_chain_median;
