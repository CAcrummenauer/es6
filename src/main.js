const myPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve('OK')}, 2000);
});
myPromise().then(response => {
    console.log(response);
})
.catch(err => {
    console.log(err);
});

async function runPromise() {
    const response = await myPromise();
    console.log(response);
}
runPromise();