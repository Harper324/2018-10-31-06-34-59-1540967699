var count_same_element = require("../practice_1/practice.js");

var count_same_elements = collection =>
  countShortLine(count_same_element(collection));

var countShortLine = element => {
  element.map(ele => {
    if (ele.key.length > 1) {
      ele.count = Number(ele.key.slice(2));
      ele.key = ele.key[0];
      return ele;
    }
  });
  return element;
}

module.exports = count_same_elements;
