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
    if (!(oneNumber == false) && !(twoNumber == false) && !(threeNumber == false)) {
        result = [add(oneNumber) / oneNumber.length, add(twoNumber) / twoNumber.length, add(threeNumber) / threeNumber.length];
    } else if (oneNumber == false && twoNumber == false && !(threeNumber == false)) {
        result = [add(threeNumber) / threeNumber.length];
    } else if (oneNumber == false && twoNumber == false && threeNumber == false) {
        result = [0];
    }

    return result;



};
function get_even_index(element) {
    var evenIndex = element.filter(function (ele, index, element) {
        return index % 2 === 1;
    });
    return evenIndex;
}
function get_even_number(element) {
    var evenNumber = element.filter(function (element) {
        return element % 2 === 0;
    });
    return evenNumber;
}
function add(element) {
    var add = element.reduce(function (a, b) {
        return a + b;
    }, 0);
    return add;
}
module.exports = even_group_calculate_average;
