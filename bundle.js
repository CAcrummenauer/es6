"use strict";

function testA() {
  return 'TestA';
}

var testB = function testB() {
  return 'TestB';
};

var testC = function testC() {
  return 'TestC';
};

var testD = function testD() {
  name: 'San';
}; // Não funciona...


var testE = function testE() {
  return {
    name: 'San',
    age: 18
  };
}; // Precisa ser assim...
// ou assim: 


var testF = function testF() {
  return {
    name: 'Lara',
    age: 19
  };
};

console.log(testA());
console.log(testB());
console.log(testC());
console.log(testD());
console.log(testE());
console.log(testF());
