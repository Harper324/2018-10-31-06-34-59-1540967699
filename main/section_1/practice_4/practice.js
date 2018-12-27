
var collect_same_elements = (collection_a, object_b) => {
  var newArray = [];
  collection_a.filter(element => object_b.value.indexOf(element.key) > -1).forEach(element =>
    newArray.push(Object.values(element).toString()));
  return newArray;
}



module.exports = collect_same_elements;
