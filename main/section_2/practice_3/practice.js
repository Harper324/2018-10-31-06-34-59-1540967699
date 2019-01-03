// todo:simplify addSame()
var count_same_elements = collection => {
  var result = [];
  for (i = 0; i < Object.keys(countElements(collection)).length; i++) {
    result.push({ name: Object.keys(countElements(collection))[i], summary: Object.values(countElements(collection))[i] })
  }
  return addSame(countShortLine(result));
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
    if (ele.name.length > 1) {
      if (ele.name.includes('[')) {
        ele.summary = Number(ele.name.slice(2, ele.name.length - 1));
        ele.name = ele.name[0];
      } else {
        ele.summary = Number(ele.name.slice(2));
        ele.name = ele.name[0];
        return ele;
      }
    }
  });
  return element;
}

var addSame = a => {
  var result = [];
  for (var i = 0; i < a.length; i++) {
    if (!(result.find(element =>
      element.name === a[i].name
    ))) {
      for (var j = i + 1; j < a.length; j++) {
        if (a[i].name === a[j].name) {
          a[i].summary += a[j].summary;
        }
      }
      result.push(a[i]);
    }
  }
  return result;
}


module.exports = count_same_elements;
