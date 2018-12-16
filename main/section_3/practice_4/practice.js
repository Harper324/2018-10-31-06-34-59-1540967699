function create_updated_collection(collection_a, object_b) {
  var countedElements = collection_a.reduce(function (allNumbers, number) {
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

  result = countShortLine(result);
  var array = result.filter(function (element) {
    if (object_b.value.includes(element.key)) {
      element.count = element.count - Math.floor(element.count / 3);
    }
    return element;
  });
  return array;
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
module.exports = create_updated_collection;
