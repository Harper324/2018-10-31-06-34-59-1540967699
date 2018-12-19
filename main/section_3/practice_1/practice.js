function create_updated_collection(collection_a, object_b) {
  return collection_a.filter(function(element){
    if(object_b.value.includes(element.key)) {
      element.count--;
    }
    return element;
  });
}

module.exports = create_updated_collection;
