'use strict';
var map_to_four_multiples_add_one = function(collection){
  let result = collection.map(item=>item*4+1);
  return result;
};

module.exports = map_to_four_multiples_add_one;
