'use strict';

var collect_min_number = collection => collection.sort((a, b) => a - b)[0];

module.exports = collect_min_number;

