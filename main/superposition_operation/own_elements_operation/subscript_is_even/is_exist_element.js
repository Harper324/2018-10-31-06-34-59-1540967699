'use strict';
var is_exist_element = function(collection,element){
    var evenIndex=get_even_index(collection);
    if( evenIndex.find(function(ele) {
        return ele===element;
      
    })) {
        return true;
    } else {
        return false;
    }

};
function get_even_index(element) {
    return element.filter(function (value, index) {
        if (index % 2 === 1) {
            return value;
        }
    });
}
console.log(is_exist_element([1, 2, 3, 4, 5, 6],4));
module.exports = is_exist_element;
