function testA() {
    return 'TestA';
}

const testB = () => {
    return 'TestB';
}

const testC = () => 'TestC';

const testD = () => {name: 'San'}; // Não funciona...

const testE = () => {
    return {name: 'San', age: 18};
}; // Precisa ser assim...

// ou assim: 

const testF = () => ({name: 'Lara', age: 19});

console.log(testA());
console.log(testB());
console.log(testC());
console.log(testD());
console.log(testE());
console.log(testF());
