var create_updated_collection = (collection_a, object_b) => {
  var result = [];
  for (i = 0; i < Object.keys(countElements(collection_a)).length; i++) {
    result.push({ key: Object.keys(countElements(collection_a))[i], count: Object.values(countElements(collection_a))[i] })
  }
  return result.filter(element => {
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
module.exports = create_updated_collection;
