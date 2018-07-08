'use strict';

function collect_max_number(collection) {
  collection = collection.sort(function (x,y) {
    return y-x;
});
  return collection[0];
}

module.exports = collect_max_number;
