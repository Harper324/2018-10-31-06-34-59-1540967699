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
  return countShortLine(result);
}
function countShortLine (element) {
  element.map(function(ele) {
    if (ele.key.length > 1) {
      ele.count = Number(ele.key.slice(2));
      ele.key = ele.key[0];
      return ele;
    }
    
  });
  return element;
}

module.exports = count_same_elements;
