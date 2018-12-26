'use strict';
var rank_desc = collection => collection.sort((a, b) => {
  return a - b;
});

module.exports = rank_desc;
