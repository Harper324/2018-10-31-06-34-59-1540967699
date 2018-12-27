'use strict';


var amount_even = collection => collection.filter(element => element % 2 === 0).reduce((a, b) => a + b);


module.exports = amount_even;
