'use strict';

function find_last_even(collection) {
  var array = collection.reverse();
  return array.find(function(element) {
    return element % 2==0;
  });
}

module.exports = find_last_even;
