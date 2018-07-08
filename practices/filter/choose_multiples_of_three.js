'use strict';

function choose_multiples_of_three(collection) {
  let result = [];
  for(let o of collection){
    if(o%3===0){
      result.push(o);
    }
  }
  return result;
  //在这里写入代码
}

module.exports = choose_multiples_of_three;
