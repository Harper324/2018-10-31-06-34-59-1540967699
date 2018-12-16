function collect_same_elements(collection_a, object_b) {
  var array = collection_a.filter(function (element) {
    return object_b.value.indexOf(element) > -1
  })
  return array;
}
module.exports = collect_same_elements;
