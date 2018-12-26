'use strict';
var rank_asc = collection => collection.sort((a, b) => {
  return b - a;
});


module.exports = rank_asc;
