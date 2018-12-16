'use strict';
function rank_by_two_large_one_small(collection) {
  var sortArray = collection.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0; i < sortArray.length; i += 3) {
    var first = sortArray[i];
    sortArray[i] = sortArray[i + 1];
    sortArray[i + 1] = sortArray[i + 2];
    sortArray[i + 2] = first;
  }
  return sortArray.filter(deleteUnderfined);
}
function deleteUnderfined(element) {
  return element;
}
module.exports = rank_by_two_large_one_small;
