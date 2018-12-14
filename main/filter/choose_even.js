'use strict';

function choose_even(collection) {
  function even(element) {
    return element % 2 == 0;
  }
  var newArray = collection.filter(even);
  return newArray;

  //在这里写入代码
}

module.exports = choose_even;
