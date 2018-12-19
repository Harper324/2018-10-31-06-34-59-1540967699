'use strict';

function median_to_letter(collection) {
  return String.fromCharCode(96 + parseInt(get_median(collection)));
}
function get_median(element) {
  var lowMiddle = Math.floor((element.length - 1) / 2);
  var highMiddle = Math.ceil((element.length - 1) / 2);

  return Math.floor((Number(array[lowMiddle]) + Number(array[highMiddle])) / 2);
}

module.exports = median_to_letter;
