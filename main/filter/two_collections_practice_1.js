'use strict';

function choose_common_elements(collection_a, collection_b) {
  return collection_a.filter(function(element) {
    return collection_b.indexOf(element) > -1
  });
}

module.exports = choose_common_elements;
