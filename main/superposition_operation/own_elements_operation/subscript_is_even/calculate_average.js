'use strict';
var calculate_average = function (collection) {
    var even = get_even(collection);
    return (even.reduce(function (a, b) {
        return a + b;
    })) / even.length;


};
function get_even(element) {
    return element.filter(function (value, index) {
        if (index % 2 === 1) {
            return value;
        }
    });
}
module.exports = calculate_average;
