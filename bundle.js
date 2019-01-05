"use strict";

var array = [1, 2, 3, 4, 5, 6, 7, 4];
var newArrayA = array.map(function (item, index) {
  return item + index;
});
console.log(newArrayA);
var newArrayB = array.map(function (item, index) {
  return item + index;
});
console.log(newArrayB);
var newArrayC = array.map(function (item) {
  return item * 10;
});
console.log(newArrayC);
var newArrayD = array.map(function (item) {
  return item * 2;
});
console.log(newArrayD);
