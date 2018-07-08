'use strict';

function compute_chain_median(collection) {
  collection.split('->').reduce(function(res, cur) {
    cur==res.length/2 ? res[cur] ++ : res[cur] = 1
    return res;
}, {})
}

module.exports = compute_chain_median;
