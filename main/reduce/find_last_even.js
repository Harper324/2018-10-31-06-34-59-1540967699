'use strict';

var find_last_even = collection => collection.reverse().find(element => element % 2 === 0);


module.exports = find_last_even;
