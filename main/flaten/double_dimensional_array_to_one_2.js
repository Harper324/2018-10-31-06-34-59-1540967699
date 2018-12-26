'use strict';

var double_to_one = (collection => collection.reduce((a, b) => {
  return a.concat(b);
},
  []
).filter((element, index, self) => {
  return self.indexOf(element) === index;
}));


module.exports = double_to_one;
