'use strict';
var even_group_calculate_average = collection => {

    var oneNumber = get_even_number(get_even_index(collection)).filter(element => element < 10);

    var twoNumber = get_even_number(get_even_index(collection)).filter(element => 9 < element && element < 100);

    var threeNumber = get_even_number(get_even_index(collection)).filter(element => 99 < element && element < 1000);

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
var get_even_index = element => element.filter((ele, index, element) => index % 2 === 1);

var get_even_number = element => element.filter(element => element % 2 === 0);

var add = element => element.reduce((a, b) => a + b);



module.exports = even_group_calculate_average;
