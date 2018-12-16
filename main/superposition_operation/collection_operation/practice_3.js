'use strict';

function hybrid_operation_to_uneven(collection) {
  var odd = get_odd(collection);
  var tripleAddTwo = get_triple_add_two(odd);
  var uneven = tripleAddTwo.reduce(function (a, b) {
    return a + b;
  })
  return uneven;


  //在这里写入代码
}

function get_odd(element) {
  var odd = element.filter(function (element) {
    return element % 2 === 1;
  })
  return odd;
}
function get_triple_add_two(element) {
  var tripleAddTwo = element.map(function (element) {
    return element * 3 + 5;
  })
  return tripleAddTwo;
}
console.log(hybrid_operation_to_uneven([1, 5, 7, 12, 11, 35, 54, 67, 70]));

//在这里写入代码


module.exports = hybrid_operation_to_uneven;

