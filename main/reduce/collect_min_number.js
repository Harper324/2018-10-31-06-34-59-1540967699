'use strict';

function collect_min_number(collection) {
  var array = collection.sort(function (a, b) {
    return a - b;
  });

  return array[0];
}

module.exports = collect_min_number;

