'use strict';

function double_to_one(collection) {
  return collection.reduce(
    function (a, b) {
      return a.concat(b);
    },
    []
  );
}

module.exports = double_to_one;
