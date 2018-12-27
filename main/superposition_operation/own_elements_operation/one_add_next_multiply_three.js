'use strict';
var one_add_next_multiply_three = collection => {
  var result = [];
  for (var i = 0; i < collection.length - 1; i++) {
    result.push(3 * (collection[i] + collection[i + 1]));
  }
  return result;
}
module.exports = one_add_next_multiply_three;
