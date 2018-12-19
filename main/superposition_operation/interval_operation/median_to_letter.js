'use strict';

function median_to_letter(collection) {
  var result = get_median(collection);
  if (result <= 26) {
    result = String.fromCharCode(96 + parseInt(result));
  } else {
    var firstCode = parseInt(Math.floor((result - 1) / 26)) + 96;
    var secondCode = parseInt((result - 1) % 26) + 97;
    result = String.fromCharCode(firstCode) + String.fromCharCode(secondCode);
  }
  return result;
}
function get_median(element) {
  var lowMiddle = Math.floor((element.length - 1) / 2);
  var highMiddle = Math.ceil((element.length - 1) / 2);

  return Math.ceil((Number(element[lowMiddle]) + Number(element[highMiddle])) / 2);
}

module.exports = median_to_letter;
