'use strict';

function even_to_letter(collection) {
  var evenToLetter = (collection.filter(function (element) {
    return element % 2 === 0;
  })).map(function (ele) {
    return ele = String.fromCharCode(96 + parseInt(ele));
  })

  return evenToLetter;
}
module.exports = even_to_letter;
