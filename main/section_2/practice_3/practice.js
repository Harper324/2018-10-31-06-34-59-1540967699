function count_same_elements(collection) {
  var countedElements = countElement(collection);
  var keys = Object.keys(countedElements);
  var times = Object.values(countedElements);
  var result = [];
  for (i = 0; i < keys.length; i++) {
    result.push({ name: keys[i], summary: times[i] })

  }
  return addSame(countShortLine(result));
}
function countElement(element) {
  return element.reduce(function (allNumbers, number) {
    if (number in allNumbers) {
      allNumbers[number]++;
    } else {
      allNumbers[number] = 1;
    }
    return allNumbers;
  }, {});
}

function countShortLine(element) {
  element.map(function (ele) {
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

function addSame(a) {
  var result = [];
  for (var i = 0; i < a.length; i++) {
    if (!(result.find(function (element) {
      return element.name === a[i].name;
    }))) {
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
