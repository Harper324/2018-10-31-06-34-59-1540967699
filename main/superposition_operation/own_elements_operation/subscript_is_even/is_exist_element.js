'use strict';
var is_exist_element = (collection, element) => {
    var evenIndex = get_even_index(collection);
    return !!evenIndex.find(ele => ele === element);
}
var get_even_index = element => element.filter((value, index) => index % 2 === 0);


module.exports = is_exist_element;
