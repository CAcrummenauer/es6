"use strict";

var array = [1, 2, 3, 4, 5, 6, 7];
var newArray = array.map(function (item) {
  return item * 2;
});
console.log(newArray);
