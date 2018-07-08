'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  let collection=[];
  for(let a of collection_a){
    if(!collection_b.includes(a)){
      collection.push(a);
    }
  }
  return collection;
}

module.exports = choose_no_common_elements;
