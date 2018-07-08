'use strict';

function compute_average(collection) {
  let sum = 0.00;
  
  collection.filter(item=>sum+=item);
  return sum/collection.length;
}

module.exports = compute_average;

