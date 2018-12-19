'use strict';

function even_to_letter(collection) {
  return (collection.filter(function (element) {
    return element % 2 === 0;
  })).map(function (ele) {
    return ele = String.fromCharCode(96 + parseInt(ele));
  });
}
module.exports = even_to_letter;
