"use strict";

function testA() {
  return 'testA';
}

var testB = function testB() {
  return 'testB';
};

console.log(testA());
console.log(testB());
