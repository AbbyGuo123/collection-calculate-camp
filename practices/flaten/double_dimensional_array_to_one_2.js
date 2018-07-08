'use strict';

function double_to_one(collection) {
  let result = [];
  let array = [];
  array= array.concat.apply(array,collection);
  for(let o of array){
    if(!result.includes(o)){
      result.push(o);
    }
  }
  return result;
}

module.exports = double_to_one;
