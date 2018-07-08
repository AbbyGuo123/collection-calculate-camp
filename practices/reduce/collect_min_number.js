'use strict';

function collect_min_number(collection) {
  collection.sort(function(x,y){return x-y;});
  return collection[0];
}

module.exports = collect_min_number;

