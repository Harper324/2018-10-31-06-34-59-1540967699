'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  var array = [];
  for (i = 0; i < collection_a.length; i++) {
    for (j = 0; j < collection_b.length; j++) {
      if (collection_a[i] % collection_b == 0) {
        array.push(collection_a[i]);
      }
    }
  }
  return array;


  //在这里写入代码
}

module.exports = choose_divisible_integer;
