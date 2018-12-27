'use strict';

var even_to_letter = collection => (collection.filter(element => element % 2 === 0))
  .map(ele => ele = String.fromCharCode(96 + parseInt(ele)));

module.exports = even_to_letter;
