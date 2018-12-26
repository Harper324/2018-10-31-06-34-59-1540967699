'use strict';

var get_union = (collection_a, collection_b) => {
  return collection_a.concat(collection_b.filter(element => !(collection_a.indexOf(element) > -1)
  ));
}

module.exports = get_union;

