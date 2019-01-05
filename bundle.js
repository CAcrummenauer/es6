"use strict";

var array = [1, 2, 3, 4, 5, 6, 7, 4];
var newArray = array.map(function (item, index) {
  return item + index;
});
console.log(newArray);
var sum = array.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
var filter = array.filter(function (item) {
  return item % 2 === 0;
});
console.log('filter: ' + filter);
console.log(filter[1]);
var find = array.find(function (item) {
  return item === 100;
});
console.log('find: ' + find);
