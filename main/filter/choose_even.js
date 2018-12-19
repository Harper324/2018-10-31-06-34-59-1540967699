'use strict';

function choose_even(collection) {
  return collection.filter(even);
}
function even(element) {
  return element % 2 == 0;
}
module.exports = choose_even;
