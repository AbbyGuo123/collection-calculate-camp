'use strict';

function collect_all_even(collection) {
  var collection_b =[];
  for(let collectionObject of collection){
    if(collectionObject%2==0)
    collection_b.push(collectionObject);
  }
   
   return collection_b;
  //在这里写入代码
}

module.exports = collect_all_even;
