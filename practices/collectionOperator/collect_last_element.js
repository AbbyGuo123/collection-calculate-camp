'use strict';

function collect_last_element(collection) {
  let lastObject = collection[collection.length-1];
  return lastObject;
}

module.exports = collect_last_element;
