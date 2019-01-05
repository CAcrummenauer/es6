// Spread
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2];
console.log(array3);

const user1 = {
    name: 'Diego',
    idade: 23,
    empresa: 'RocketSeat'
};
console.log(user1);
const user2 = {...user1, name: 'Gabriel'};
console.log(user2);