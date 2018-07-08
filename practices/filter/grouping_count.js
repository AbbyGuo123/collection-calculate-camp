'use strict';

function grouping_count(collection) {
    let result = [];
    collection.filter(item=>{result.hasOwnProperty(item)?result[item]++:result[item]=1;})
    return result;
}

module.exports = grouping_count;
