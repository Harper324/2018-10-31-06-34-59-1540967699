var collect_same_elements = ((collection_a, collection_b) =>
  collection_a.filter(element => collection_b[0].indexOf(element) > -1));

module.exports = collect_same_elements;
