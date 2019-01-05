const array = [1, 2, 3, 4, 5, 6, 7, 4];

const newArrayA = array.map(function(item, index) {
    return item + index;
});
console.log(newArrayA);

const newArrayB = array.map((item, index) => {
    return item + index;
});
console.log(newArrayB);

const newArrayC = array.map(item => {
    return item * 10;
});
console.log(newArrayC);

const newArrayD = array.map(item => item * 2);
console.log(newArrayD);
