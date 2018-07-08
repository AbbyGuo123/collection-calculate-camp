'use strict';

function choose_no_repeat_number(collection) {
  let result=[];
  for(let collectionbObject of collection){
    if(!result.includes(collectionbObject)){
      result.push(collectionbObject);
    }
  }
  return result;
  //在这里写入代码
}

module.exports = choose_no_repeat_number;
