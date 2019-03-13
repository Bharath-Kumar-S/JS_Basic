setTimeout(function () {
    console.log(`First Line`);
}, 0);
console.log(setTimeout(function () {
    console.log(`Second Line`);
}, 0));
console.log(`Third Line`);