// Rest operator
const user = {
    name: 'Diego',
    age: 23,
    empresa: 'Rocketseat'
};
const {name, ...rest} = user;
console.log(name);
console.log(rest);

const array = [1, 2, 3, 4];
const [a, b, ...c] = array;
console.log(a);
console.log(b);
console.log(c);



console.log('Funções: ');
function somaA(...params) {
    return params.reduce((total, next) => {
        return total + next
    });
}
console.log('somaA: ' + somaA(1, 2, 3, 4, 5));

function somaB(a, b, ...params) {
    return params;
}
console.log(somaB(1, 2, 3, 4, 5));

const somaC = (...params) => params.reduce((total, next) => total + next);
console.log('somaC: ' + somaA(1, 2, 3, 4, 5));