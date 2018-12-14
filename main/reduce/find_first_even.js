'use strict';

function find_first_even(collection) {
  var firstEven=collection.find(function(element) {
    return element % 2==0;
  })
  return firstEven;
  //在这里写入代码
}

module.exports = find_first_even;

