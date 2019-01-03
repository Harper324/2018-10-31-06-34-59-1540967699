var create_updated_collection = (collection_a, object_b) => {
  var result = [];
  var countElement = countElements(collection_a);
  for (i = 0; i < Object.keys(countElement).length; i++) {
    result.push({
      key: Object.keys(countElement)[i],
      count: Object.values(countElement)[i]
    })
  }
  return countShortLine(result).filter(element => {
    if (object_b.value.includes(element.key)) {
      element.count = element.count - Math.floor(element.count / 3);
    }
    return element;
  });
}

var countElements = element => {
  return element.reduce((allNumbers, number) => {
    if (number in allNumbers) {
      allNumbers[number]++;
    } else {
      allNumbers[number] = 1;
    }
    return allNumbers;
  }, {});
}

var countShortLine = element => {
  element.map(ele => {
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
