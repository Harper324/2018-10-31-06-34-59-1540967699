'use strict';

function average_uneven(collection) {
  return collection.filter(get_odd).reduce(function (a, b) {
    return a + b;
  }) / collection.filter(get_odd).length;
}
function get_odd(element) {
  return element % 2 === 1;
}
module.exports = average_uneven;
