function count_same_elements(collection) {
  var countedElements = collection.reduce(function (allNumbers, number) {
    if (number in allNumbers) {
      allNumbers[number]++;
    } else {
      allNumbers[number] = 1;
    }
    return allNumbers;
  }, {});
  var keys = Object.keys(countedElements);
  var times = Object.values(countedElements);
  var result = [];
  for (i = 0; i < keys.length; i++) {
    result.push({ key: keys[i], count: times[i] })

  }
  return addSame(countShortLine(result));
}
function countShortLine(element) {
  element.map(function (ele) {
    if (ele.key.length > 1) {
      if (ele.key.includes('[')) {
        ele.count = Number(ele.key.slice(2, ele.key.length - 1));
        ele.key = ele.key[0];
      } else {
        ele.count = Number(ele.key.slice(2));
        ele.key = ele.key[0];
        return ele;
      }
    }

  });
  return element;
}
function addSame(a) {
  var result = [];
  for (i = 0; i < a.length; i++) {
    if (!(result.find(function (element) {
      return element.key === a[i].key;
    }))) {
      for (j = i + 1; j < a.length; j++) {
        if (a[i].key === a[j].key) {
          a[i].count += a[j].count;
        }
      }
      result.push(a[i]);
    }
  }
  return result;
}
module.exports = count_same_elements;
