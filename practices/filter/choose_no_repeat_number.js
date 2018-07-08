'use strict';

function choose_no_repeat_number(collection) {
  let result = new Map();
  return collection.filter(o=>!result.has(o)&&result.set(o));
  //在这里写入代码
}

module.exports = choose_no_repeat_number;
