var count_same_elements = collection => {
  var result = [];
  for (i = 0; i < Object.keys(countElements(collection)).length; i++) {
    result.push({ key: Object.keys(countElements(collection))[i], count: Object.values(countElements(collection))[i] })
  }
  return result;
}
var countElements = collection => collection.reduce((allNumbers, number) => {
  if (number in allNumbers) {
    allNumbers[number]++;
  } else {
    allNumbers[number] = 1;
  }
  return allNumbers;
}, {});

module.exports = count_same_elements;
