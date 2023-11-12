'use strict'

function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

// const result = makeTransaction(5, 3000);
// console.log(result);

// const resultOne = makeTransaction(3, 1000);
// console.log(resultOne);

// const resultTwo = makeTransaction(10, 500);
// console.log(resultTwo);