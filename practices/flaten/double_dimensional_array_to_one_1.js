'use strict';

function double_to_one(collection) {
  let result = [];
  result= result.concat.apply(result,collection);
  return result;
}

module.exports = double_to_one;
