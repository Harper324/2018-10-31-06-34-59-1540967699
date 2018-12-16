'use strict';
var even_asc_odd_desc = function (collection) {
    var even = get_even(collection).sort(function (a, b) {
        return a - b;
    });
    var odd = get_odd(collection).sort(function (a, b) {
        return b - a;
    });
    return even.concat(odd);



};
function get_even(element) {
    return element.filter(function (element) {
        return element % 2 === 0;
    });
}
function get_odd(element) {
    return element.filter(function (element) {
        return element % 2 === 1;
    });
}
module.exports = even_asc_odd_desc;
