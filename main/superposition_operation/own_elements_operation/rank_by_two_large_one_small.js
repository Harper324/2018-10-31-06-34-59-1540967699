'use strict';
var rank_by_two_large_one_small = collection => {
  var sortArray = collection.sort((a, b) => a - b);
  for (var i = 0; i < sortArray.length; i += 3) {
    if ((i + 2) < sortArray.length) {
      var first = sortArray[i];
      [sortArray[i], sortArray[i + 1], sortArray[i + 2]] = [sortArray[i + 1], sortArray[i + 2], first];
    }
  }
  return sortArray.filter(element => element);
};

module.exports = rank_by_two_large_one_small;
