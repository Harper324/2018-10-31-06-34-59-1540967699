var create_updated_collection = (collection_a, object_b) =>
  collection_a.filter(element => {
    if (object_b.value.includes(element.key)) {
      element.count = element.count - Math.floor(element.count / 3);
    }
    return element;
  });


module.exports = create_updated_collection;
