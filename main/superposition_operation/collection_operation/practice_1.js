'use strict';

function hybrid_operation(collection) {
  var hybridOperation = collection.map(function (element) {
    return 3 * element + 2;
  }).reduce(function (a, b) {
    return a + b;
  })
  return hybridOperation;

}
module.exports = hybrid_operation;

