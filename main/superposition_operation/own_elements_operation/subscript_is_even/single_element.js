'use strict';
var single_element = function (collection) {
    var evenIndex = get_even_index(collection);
    var single = get_single(evenIndex);
    return single;

};
function get_even_index(element) {
    return element.filter(function (value, index) {
        if (index % 2 === 1) {
            return value;
        }
    });
}

function get_single(a) {
    for (var i = 0; i < a.length; i++) {
        for (var j = i + 1; j < a.length; j++) {
            var length = a.length;
            if (a[i] === a[j]) {
                a.splice(j, 1);
            }
            if (length !== a.length) {
                a.splice(i, 1);
            }
        }
    }
    return a;
}


module.exports = single_element;
