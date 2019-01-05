"use strict";

var user = {
  name: 'Cezar',
  age: 23,
  address: {
    city: 'Ibarama',
    uf: 'RS'
  }
};
console.log(user); // Desestruturação

var name = user.name,
    age = user.age,
    uf = user.address.uf;
console.log(name, age, uf);

function showNameA(_ref) {
  var name = _ref.name;
  console.log("Nome do usu\xE1rio desestruturado em par\xE3metro de fun\xE7\xE3o: ".concat(name, "."));
}

showNameA(user);

var showNameB = function showNameB(_ref2) {
  var name = _ref2.name;
  return console.log("Nome do usu\xE1rio desestruturado em par\xE3metro de fun\xE7\xE3o: ".concat(name, "."));
};

showNameB(user);
