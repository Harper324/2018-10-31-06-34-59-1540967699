'use strict';
var calculate_median = collection => get_median(get_even(collection));

var get_median = element => {
    var lowMiddle = Math.floor((element.length - 1) / 2);
    var highMiddle = Math.ceil((element.length - 1) / 2);
    return (element[lowMiddle] + element[highMiddle]) / 2;
}

var get_even = element => {
    return element.filter(function (value, index) {
        if (index % 2 === 1) {
            return value;
        }
    });
}
module.exports = calculate_median;
