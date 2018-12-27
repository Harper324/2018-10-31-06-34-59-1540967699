'use strict';

var hybrid_operation_to_uneven = collection => get_triple_add_five(get_odd(collection)).reduce((a, b) => a + b);

var get_odd = element => element.filter(element => element % 2 === 1);

var get_triple_add_five = element => element.map(element => element * 3 + 5);



module.exports = hybrid_operation_to_uneven;

