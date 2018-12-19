'use strict';


function amount_even(collection) {
  return collection.filter(get_even).reduce(function (a, b) {
    return a + b;
  });
}
function get_even(element) {
  return element % 2 === 0;
}
module.exports = amount_even;
