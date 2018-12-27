'use strict';
var is_exist_element = (collection, element) => {
    var evenIndex = get_even_index(collection);
    if (evenIndex.find(ele => ele === element)) {
        return true;
    } else {
        return false;
    }
};
var get_even_index = element => element.filter((value, index) => {
    if (index % 2 === 0) {
        return value;
    }
});

module.exports = is_exist_element;
