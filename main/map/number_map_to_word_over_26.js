'use strict';
var number_map_to_word_over_26 = function (collection) {
  return collections.map(function (element) {
    if (element <= 26) {
      element = String.fromCharCode(96 + parseInt(element));
    } else {
      element = 'a' + String.fromCharCode(96 + parseInt(element % 26));
    }
    return element;
  });
};

module.exports = number_map_to_word_over_26;
