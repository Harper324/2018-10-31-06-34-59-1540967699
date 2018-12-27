'use strict';

var hybrid_operation = collection => collection.map(element => 3 * element + 2
).reduce((a, b) => a + b);
module.exports = hybrid_operation;

