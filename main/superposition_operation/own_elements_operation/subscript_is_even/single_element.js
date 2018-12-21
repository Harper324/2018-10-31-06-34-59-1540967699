'use strict';
var single_element = function (collection) {
    var evenIndex = get_even_index(collection);
    var single = evenIndex.filter(function (element, index, array) {
        return array.indexOf(element) === array.lastIndexOf(element);
    });
    return single;

};
function get_even_index(element) {
    return element.filter(function (value, index) {
        if (index % 2 === 1) {
            return value;
        }
    });
}



module.exports = single_element;
