'use strict';
var number_map_to_word = function(collection){
  let result = collection.map(item=> String.fromCharCode('a'.charCodeAt()+item-1));
  return result;
};

module.exports = number_map_to_word;
