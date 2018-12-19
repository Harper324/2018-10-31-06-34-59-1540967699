'use strict';

function get_union(collection_a, collection_b) { 
  return collection_a.concat(collection_b.filter(function(element){
    return !(collection_a.indexOf(element) > -1)
  }));
}

module.exports = get_union;

