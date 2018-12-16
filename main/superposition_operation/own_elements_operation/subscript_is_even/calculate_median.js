'use strict';
var calculate_median = function (collection) {
    var even = get_even(collection);
    return get_median(even);



};

function get_median(element) {
    var lowMiddle = Math.floor((element.length - 1) / 2);
    var highMiddle = Math.ceil((element.length - 1) / 2);
    return (element[lowMiddle] + element[highMiddle]) / 2;
}

function get_even(element) {
    return element.filter(function (value, index) {
        if (index % 2 === 1) {
            return value;
        }
    });
}
module.exports = calculate_median;
