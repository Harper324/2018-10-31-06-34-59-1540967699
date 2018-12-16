'use strict';

function average_to_letter(collection) {
  var averageNumber = Math.ceil((collection.reduce(function (a, b) {
    return a + b;
  })) / collection.length);
  var averageLetter = String.fromCharCode(96 + parseInt(averageNumber));
  return averageLetter;
}
console.log(average_to_letter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
module.exports = average_to_letter;

