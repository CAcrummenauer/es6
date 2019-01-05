"use strict";

var array = [1, 2, 3, 4, 5, 6, 7];
var newArray = array.map(function (item, index) {
  return item + index;
});
console.log(newArray);
var sum = array.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
