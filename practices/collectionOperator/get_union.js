'use strict';

function get_union(collection_a, collection_b) {
  let collection  = [];
  for(let collectionaObject of collection_a){
    if(!collection.includes(collectionaObject)){
      collection.push(collectionaObject);
    }
  }
  for(let collectionbObject of collection_b){
    if(!collection.includes(collectionbObject)){
      collection.push(collectionbObject);
    }
  }
  return collection;
}

module.exports = get_union;

