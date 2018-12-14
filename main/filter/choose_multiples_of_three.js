'use strict';

function choose_multiples_of_three(collection) {
  function even(element) {
    return element % 3 == 0;
  }
  var newArray = collection.filter(even);
  return newArray;

  //在这里写入代码
}

module.exports = choose_multiples_of_three;
