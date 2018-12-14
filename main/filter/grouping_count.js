'use strict';

function grouping_count(collection) {
  var countedNames = collection.reduce(function (allNames, name) {
    if (name in allNames) {
      allNames[name]++;
    } else {
      allNames[name] = 1;
    }
    return allNames;
  }, {});
  return countedNames;

  //在这里写入代码
}

module.exports = grouping_count;
