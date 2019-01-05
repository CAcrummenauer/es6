const array = [1, 2, 3, 4, 5, 6, 7];

const newArray = array.map(function(item, index) {
    return item + index;
});

console.log(newArray);