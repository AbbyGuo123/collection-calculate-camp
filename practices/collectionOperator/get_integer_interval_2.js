'use strict';

function get_integer_interval_2(number_a, number_b) {
  let number_c = [];
  if(number_a<number_b){
    for(let i=number_a;i<=number_b;i++){
      if(i%2===0)
      number_c.push(i);
    }
  }
  else if(number_a>number_b){
    for(let i=number_a;i>=number_b;i--){
      if(i%2===0)
      number_c.push(i);
    }
  }
  else{
    if(number_a%2===0)
    number_c.push(number_a);
    
  }
  return number_c;
}

module.exports = get_integer_interval_2;
