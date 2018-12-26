'use strict';

var double_to_one=(collection => collection.reduce((a, b) =>{
      return a.concat(b);
    },
    []
  ));

module.exports = double_to_one;
