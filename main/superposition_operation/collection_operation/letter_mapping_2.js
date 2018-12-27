'use strict';

var average_to_letter = collection =>
  String.fromCharCode(96 + parseInt(Math.ceil((collection.reduce((a, b) => a + b)) / collection.length)));

module.exports = average_to_letter;

