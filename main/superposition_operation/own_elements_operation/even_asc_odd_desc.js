'use strict';
var even_asc_odd_desc = collection => get_even(collection).sort((a, b) => a - b)
    .concat(get_odd(collection).sort((a, b) => b - a));

var get_even = element => element.filter(element => element % 2 === 0);

var get_odd = element => element.filter(element => element % 2 === 1);


module.exports = even_asc_odd_desc;
