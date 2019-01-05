"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Rest operator
var user = {
  name: 'Diego',
  age: 23,
  empresa: 'Rocketseat'
};

var name = user.name,
    rest = _objectWithoutProperties(user, ["name"]);

console.log(name);
console.log(rest);
var array = [1, 2, 3, 4];
var a = array[0],
    b = array[1],
    c = array.slice(2);
console.log(a);
console.log(b);
console.log(c);
console.log('Funções: ');

function somaA() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log('somaA: ' + somaA(1, 2, 3, 4, 5));

function somaB(a, b) {
  for (var _len2 = arguments.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    params[_key2 - 2] = arguments[_key2];
  }

  return params;
}

console.log(somaB(1, 2, 3, 4, 5));

var somaC = function somaC() {
  for (var _len3 = arguments.length, params = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    params[_key3] = arguments[_key3];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
};

console.log('somaC: ' + somaA(1, 2, 3, 4, 5));
