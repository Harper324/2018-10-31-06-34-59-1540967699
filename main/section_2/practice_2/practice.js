function count_same_elements(collection) {
  
  var countedElements = collection.reduce(function(allNumbers, number) {
    if (number in allNumbers) {
      allNumbers[number]++;
    } else {
      allNumbers[number]=1;
    }
    return allNumbers;
  },{});
  var keys=Object.keys(countedElements);
  var times=Object.values(countedElements);
  var result=[];
  for (i=0; i<keys.length; i++) {
    result.push({key:keys[i],count:times[i]})

  }
  return result;
  //在这里写入代码
}
console.log(count_same_elements([
  "a", "a", "a",
  "e", "e", "e", "e", "e", "e", "e",
  "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h",
  "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t",
  "f", "f", "f", "f", "f", "f", "f", "f", "f",
  "c", "c", "c", "c", "c", "c", "c", "c",
  "g", "g", "g", "g", "g", "g", "g",
  "b", "b", "b", "b", "b", "b",
  "d-5"
]));
module.exports = count_same_elements;
