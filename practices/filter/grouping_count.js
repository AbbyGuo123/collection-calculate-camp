'use strict';

function grouping_count(collection) {
    let result = [];
    for(let o of collection){
        if(result.hasOwnProperty(o)){
            result[o] ++;
        }
        else
            result[o] = 1;
    }
    return result;
}

module.exports = grouping_count;
