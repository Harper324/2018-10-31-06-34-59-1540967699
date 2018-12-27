'use strict';
var calculate_average = collection => (get_even(collection)
    .reduce((a, b) => a + b)) / get_even(collection).length;
var get_even = element => {
    return element.filter((value, index) => {
        if (index % 2 === 1) {
            return value;
        }
    });
}
module.exports = calculate_average;
