'use strict';

function choose_multiples_of_three(collection) {
  return collection.filter(triple);
}
function triple(element) {
  return element % 3 == 0;
}

module.exports = choose_multiples_of_three;
