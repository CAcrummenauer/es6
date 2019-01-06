const myPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve('OK')}, 2000);
});
myPromise().then(response => {
    console.log(response);
})
.catch(err => {
    console.log(err);
});

async function runPromiseA() {
    // Usar await apenas dentro de uma função async
    console.log('Async/await: ' + await myPromise());
    console.log('Async/await: ' + await myPromise());
    console.log('Async/await: ' + await myPromise());
    
    // Using only promise:
    myPromise().then(response => {
        console.log('Only promise: ' + response);
        myPromise().then(response => {
            console.log('Only promise: ' + response);
            myPromise().then(response => {
                console.log('Only promise: ' + response);
            });
        });
    });
};
runPromiseA();

const runPromiseB = async() => {
    console.log('Async/await with arrow: ' + await myPromise());
    console.log('Async/await with arrow: ' + await myPromise());
    console.log('Async/await with arrow: ' + await myPromise());
};

runPromiseB();