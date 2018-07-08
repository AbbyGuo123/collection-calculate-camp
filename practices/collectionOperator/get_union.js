'use strict';

function get_union(collection_a, collection_b) {
  let collection  = [];
  for(let collectionaObject of collection_a){
    if(!collection.includes(collectionaObject)){
      collection.push(collectionaObject);
    }
  }
  collection.reverse;
  return collection;
}

module.exports = get_union;

