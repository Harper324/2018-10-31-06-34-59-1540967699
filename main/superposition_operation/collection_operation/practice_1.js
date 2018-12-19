'use strict';

function hybrid_operation(collection) {
  return collection.map(function (element) {
    return 3 * element + 2;
  }).reduce(function (a, b) {
    return a + b;
  });
}
module.exports = hybrid_operation;

