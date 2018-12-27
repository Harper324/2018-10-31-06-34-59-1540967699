var collect_same_elements = ((collection_a, object_b) =>
  collection_a.filter(element => object_b.value.indexOf(element) > -1));

module.exports = collect_same_elements;
