'use strict';

function find_last_even(collection) {
  var array = collection.reverse();
  var lastEven=array.find(function(element) {
    return element % 2==0;
  })
  return lastEven;
  //在这里写入代码
}

module.exports = find_last_even;
