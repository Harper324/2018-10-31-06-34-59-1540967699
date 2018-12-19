'use strict';

function double_to_one(collection) {
  var array = collection.reduce(
    function (a, b) {
      return a.concat(b);
    },
    []
  );
  var newArray = array.filter(function (element, index, self) {
    return self.indexOf(element) === index;
  })
  return newArray;
}
module.exports = double_to_one;
