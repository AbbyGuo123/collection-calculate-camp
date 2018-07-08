'use strict';

function get_letter_interval_2(number_a, number_b) {
  let collection = [];
  let a = 'a'.charCodeAt();
  let flag = 0;
  let smallOne = number_a;
  let bigOne = number_b;
  if(number_a>number_b){
    smallOne = number_b;
    bigOne = number_a;
  }
  let i=parseInt(smallOne/26);
  for(;i<bigOne/26+1&&flag===0;i++){
    let c = '';
    let j =0;
    if(i!==0){
      c = String.fromCharCode(a+i-1);
    }
    else j=smallOne-(parseInt(smallOne/26)*26)-1;
    for(;j<26;j++){
      if(i*26+j===bigOne){
        flag=1;
        break;
      }
      console.log(a+j);
      let k = j+a;
      let c1 = String.fromCharCode(k);
      collection.push(c+c1);
    }
  }  
  if(number_a>number_b){
    collection.reverse();
  }
  return collection;
  
  
}

module.exports = get_letter_interval_2;

