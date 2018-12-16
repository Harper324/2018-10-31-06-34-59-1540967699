'use strict';

  function double_to_one(collection) {
    var array = collection.reduce(
      function (a, b) {
        return a.concat(b);
      },
      []
    );
    let newArray = array.reduce((init, current) => {
      if (init.length === 0 || init[init.length - 1] !== current) {
        init.push(current);
      }
      return init;
    }, []);
    return newArray;

    //在这里写入代码

  }

  module.exports = double_to_one;
