function create_updated_collection(collection_a, object_b) {
  return collection_a.filter(function (element) {
    if (object_b.value.includes(element.key)) {
      element.count = element.count - Math.floor(element.count / 3);
    }
    return element;
  });
}

module.exports = create_updated_collection;
