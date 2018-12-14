'use strict';

function get_integer_interval_2(number_a, number_b) {
  if(number_a == number_b && number_a%2!=0) {
    return [number_a];
  } else if(number_a>=number_b) {
    let lastIndex=number_a-number_b;
    for(i=0; i<= lastIndex; i++) {
      var arr=[];
      arr[i]=number_a-i;
    }
  } else { 
    let lastIndex=number_b-number_a;
    for(i=0; i<= lastIndex; i++) {
      var arr=[];
      arr[i]=number_b+i;
    }
    var newArr=arr.filter(even);
    function even(element) {
      return element%2==0;
    }
    return newArr;

  }

  //在这里写入代码
}

module.exports = get_integer_interval_2;
