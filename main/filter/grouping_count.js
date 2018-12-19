'use strict';

function grouping_count(collection) {
  return collection.reduce(function (allNames, name) {
    if (name in allNames) {
      allNames[name]++;
    } else {
      allNames[name] = 1;
    }
    return allNames;
  }, {});
}
module.exports = grouping_count;
