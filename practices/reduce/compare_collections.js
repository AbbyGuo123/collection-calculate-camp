'use strict';

function compare_collections(collection_a, collection_b) {
  let collectiona = collection_a.sort().toString()
  let collectionb = collection_b.sort().toString()
  return collectiona===collectionb;
}

module.exports = compare_collections;


