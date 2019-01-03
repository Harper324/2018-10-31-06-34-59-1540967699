'use strict';
var single_element = collection => get_even_index(collection).filter((element, index, array) =>
    array.indexOf(element) === array.lastIndexOf(element));

var get_even_index = element => element.filter((value, index) => index % 2 === 1);



module.exports = single_element;
