'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  let result=[];
  for(let a of collection_a){
    let flag = 0;
    for(let b of collection_b){
      if(a%b===0){
        flag =1;
        break;
      }
    }
    if(flag===1){
      result.push(a);
    }
  }
  return result;
}

module.exports = choose_divisible_integer;
