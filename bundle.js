"use strict";

function test(x) {
  var y = 2; // y é uma variável de escopo

  if (x > 5) {
    var _y = 4; // Permite reutilizar o nome de y

    console.log(x, _y);
  }

  console.log(y);
} // console.log(y); // Não está no escopo de y


test(10);
