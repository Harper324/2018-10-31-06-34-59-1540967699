function collect_same_elements(collection_a, object_b) {
  var array = collection_a.filter(function (element) {
    return object_b.value.indexOf(element) > -1
  })
  return array;
  //在这里写入代码
}
console.log(collect_same_elements(["a", "e", "h", "t", "f", "c", "g", "b", "d"],{value: ["a", "d", "e", "f"]}))
module.exports = collect_same_elements;
