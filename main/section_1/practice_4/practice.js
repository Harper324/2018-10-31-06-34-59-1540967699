function collect_same_elements(collection_a, object_b) {
  var array = collection_a.filter(function (element) {
    return object_b.value.indexOf(element.key) > -1;
  })
  var newArray = [];
  array.forEach(function (element) {
    newArray.push(Object.values(element).toString());

  })
  return newArray;
}



module.exports = collect_same_elements;
