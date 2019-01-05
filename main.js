const user = {
    name: 'Cezar',
    age: 23,
    address: {
        city: 'Ibarama',
        uf: 'RS'
    }
};

console.log(user);

// Desestruturação
const {name, age, address: {uf}} = user;

console.log(name, age, uf);

function showNameA({name}) {
    console.log(`Nome do usuário desestruturado em parãmetro de função: ${name}.`);
}
showNameA(user);

const showNameB = ({name}) => console.log(`Nome do usuário desestruturado em parãmetro de função: ${name}.`);
showNameB(user);