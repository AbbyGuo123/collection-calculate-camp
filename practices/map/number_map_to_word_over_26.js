'use strict';
var number_map_to_word_over_26 = function(collection){
  let result = collection.map(item=> String.fromCharCode('a'.charCodeAt()+item));
  return result;
};

module.exports = number_map_to_word_over_26;
