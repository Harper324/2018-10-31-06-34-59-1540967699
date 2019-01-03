var count_same_elements = collection => {
  var result = [];
  var countElement = countElements(collection);
  for (i = 0; i < Object.keys(countElement).length; i++) {
    result.push({ key: Object.keys(countElement)[i], count: Object.values(countElement)[i] })
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
