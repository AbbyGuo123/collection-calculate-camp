'use strict';

function choose_even(collection) {
  let result = [];
  for(let o of collection){
    if(o%2==0){
      result.push(o);
    }
  }
  //在这里写入代码
  return result;
}

module.exports = choose_even;
