const myPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve('OK')}, 2000);
});

myPromise().then(response => {
    console.log(response);
})
.catch(err => {
    console.log(err);
});