'use strict';

var hybrid_operation_to_uneven = collection => get_triple_add_two(get_odd(collection));

var get_odd = element => element.filter(element => element % 2 === 1);

var get_triple_add_two = element => element.map(element => element * 3 + 2);

module.exports = hybrid_operation_to_uneven;

