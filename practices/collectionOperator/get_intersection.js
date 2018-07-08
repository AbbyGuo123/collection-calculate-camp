'use strict';

function get_intersection(collection_a, collection_b) {
  let collection_c=[];
  for(let collection_b_object of collection_b){
    for(let collection_a_object of collection_a){
      if(collection_b_object===collection_a_object)
        collection_c.push(collection_b_object);
    }
  }
  return collection_c;
}

module.exports = get_intersection;
