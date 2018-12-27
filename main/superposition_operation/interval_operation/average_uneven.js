'use strict';

var average_uneven = collection => collection.filter(get_odd).reduce((a, b) => a + b) / collection.filter(get_odd).length;

var get_odd = element => element % 2 === 1;

module.exports = average_uneven;
