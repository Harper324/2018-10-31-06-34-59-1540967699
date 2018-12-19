'use strict';

function get_intersection(collection_a, collection_b) {
  return collection_b.filter(function (element) {
    return collection_a.includes(element);
  });
}
console.log(get_intersection([10, 27, 28, 19, 5], [5, 78, 28, 19, 23]));
module.exports = get_intersection;
