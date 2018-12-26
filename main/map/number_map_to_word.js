'use strict';
var number_map_to_word = collection => collection.map(element => String.fromCharCode(96 + parseInt(element)));

module.exports = number_map_to_word;
