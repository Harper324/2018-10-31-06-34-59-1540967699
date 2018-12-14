function create_updated_collection(collection_a, object_b) {
  var array=collection_a.filter(function(element){
    if(object_b.value.includes(element.key)) {
      element.count--;
    }
    return element;
  });
  return array;

  //在这里写入代码
}

module.exports = create_updated_collection;
