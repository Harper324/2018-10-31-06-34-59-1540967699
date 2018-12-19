'use strict';

function hybrid_operation_to_uneven(collection) {

  return get_triple_add_two(get_odd(collection)).reduce(function (a, b) {
    return a + b;
  });
}

function get_odd(element) {
  return element.filter(function (element) {
    return element % 2 === 1;
  });
}
function get_triple_add_two(element) {
  return element.map(function (element) {
    return element * 3 + 5;
  });
}


module.exports = hybrid_operation_to_uneven;

