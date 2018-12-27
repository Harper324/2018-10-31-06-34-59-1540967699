'use strict';

var median_to_letter = collection => {
  if (get_median(collection) <= 26) {
    return String.fromCharCode(96 + parseInt(get_median(collection)));
  } else {
    var firstCode = parseInt(Math.floor((get_median(collection) - 1) / 26)) + 96;
    var secondCode = parseInt((get_median(collection) - 1) % 26) + 97;
    return String.fromCharCode(firstCode) + String.fromCharCode(secondCode);
  }
}
var get_median = element => {
  var lowMiddle = Math.floor((element.length - 1) / 2);
  var highMiddle = Math.ceil((element.length - 1) / 2);

  return Math.ceil((Number(element[lowMiddle]) + Number(element[highMiddle])) / 2);
}

module.exports = median_to_letter;
