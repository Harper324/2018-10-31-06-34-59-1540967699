'use strict';

var choose_no_common_elements = (collection_a, collection_b) => {
  return collection_a.filter((element => !(collection_b.indexOf(element) > -1)))
  .concat(collection_b.filter(element => !(collection_a.indexOf(element) > -1)
  ));
}

module.exports = choose_no_common_elements;
