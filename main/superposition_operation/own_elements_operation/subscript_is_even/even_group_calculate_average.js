'use strict';
var even_group_calculate_average = function (collection) {
    var evenIndex = get_even_index(collection);
    var evenNumber = get_even_number(evenIndex);
    var oneNumber = evenNumber.filter(function (element) {
        return element < 10;
    });
    var twoNumber = evenNumber.filter(function (element) {
        return 9 < element && element < 100;
    });
    var threeNumber = evenNumber.filter(function (element) {
        return 99 < element && element < 1000;
    });
    var result = [];
    if (oneNumber && twoNumber && threeNumber) {
        result = [add(oneNumber) / oneNumber.length, add(twoNumber) / twoNumber.length, add(threeNumber) / threeNumber.length];
    } else if (!oneNumber && !twoNumber && threeNumber) {
        result = [add(threeNumber) / threeNumber.length];
    } else {
        result = [0];
    }
    return result;

};
function get_even_index(element) {
    return element.filter(function (value, index) {
        if (index % 2 === 1) {
            return value;
        }
    });
}
function get_even_number(element) {
    return element.filter(function (element) {
        return element % 2 === 0;
    });
}
function add(element) {
    return element.reduce(function (a, b) {
        return a + b;
    });
}
module.exports = even_group_calculate_average;
