'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  var array = collection_a.filter(function (element) {
    return !(collection_b.indexOf(element) > -1)
  }).concat(collection_b.filter(function (element) {
    return !(collection_a.indexOf(element) > -1)
  }))
  return array;

  //在这里写入代码
}

module.exports = choose_no_common_elements;
