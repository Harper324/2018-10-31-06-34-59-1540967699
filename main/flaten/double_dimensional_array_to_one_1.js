'use strict';

function double_to_one(collection) {
  var array = collection.reduce(
    function (a, b) {
      return a.concat(b);
    },
    []
  );
  return array;

  //在这里写入代码
}

module.exports = double_to_one;
