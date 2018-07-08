'use strict';
var rank_asc = function(collection){
  return collection.sort(function (x,y) {
    return y-x;
});
};

module.exports = rank_asc;
