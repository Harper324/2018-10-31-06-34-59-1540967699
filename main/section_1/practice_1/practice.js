function collect_same_elements(collection_a, collection_b) {
  var array = collection_a.filter(function (element) {
    return collection_b.indexOf(element) > -1
  })
  return array;
  //在这里写入代码
}
module.exports = collect_same_elements;
