'use strict';

function get_letter_interval(number_a, number_b) {
  let a = 'a'.charCodeAt();
  let collection = [];
  let smallOne = number_a;
  let bigOne = number_b;
  if(number_a>number_b){
    smallOne = number_b;
    bigOne = number_a;
  }
  for(let i=smallOne-1;i<bigOne;i++){
    let k = a+i;
    let c1 = String.fromCharCode(k);
    collection.push(c1);
  }
  if(number_a>number_b){
    collection.reverse();
  }
  return collection;
}

module.exports = get_letter_interval;
