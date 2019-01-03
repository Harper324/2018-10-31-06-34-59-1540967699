'use strict';

var choose_no_repeat_number = collection => {
  var array = [];
  for (var i = 0; i < collection.length; i++) {
    if (array.indexOf(collection[i]) === -1) {
      array.push(collection[i]);
    }
  }
  return array;
}



module.exports = choose_no_repeat_number;
