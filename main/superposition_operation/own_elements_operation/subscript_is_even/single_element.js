'use strict';
var single_element = function (collection) {
    var evenIndex = get_even_index(collection);
    var single = get_single(evenIndex);
    return single;

};
function get_even_index(element) {
    return element.filter(function (value, index) {
        if (index % 2 === 1) {
            return value;
        }
    });
}
function get_single(element) {
    var single = element.sort(function (a, b) {
        return a - b;
    })
    var singleNumber = [];
    for (var i = 0; i < single.length; i++) {
        if (single[i] !== single[i + 1] && single[i] !== single[i - 1]) {
            singleNumber.push(single[i]);
        }

    }
    return singleNumber;

}



module.exports = single_element;
