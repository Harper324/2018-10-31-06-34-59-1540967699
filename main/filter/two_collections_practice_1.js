'use strict';

var choose_common_elements = (collection_a, collection_b) => {
  return collection_a.filter(element => collection_b.indexOf(element) > -1);
}

module.exports = choose_common_elements;
