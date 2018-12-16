'use strict';

function get_intersection(collection_a, collection_b) {
  var newArray = collection_a.filter(function (element) {
    return collection_b.indexOf(element) > -1
  })
  return newArray;
}

module.exports = get_intersection;
