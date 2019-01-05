"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Spread
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var array3 = [].concat(array1, array2);
console.log(array3);
var user1 = {
  name: 'Diego',
  idade: 23,
  empresa: 'RocketSeat'
};
console.log(user1);

var user2 = _objectSpread({}, user1, {
  name: 'Gabriel'
});

console.log(user2);
