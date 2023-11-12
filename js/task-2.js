'use strict'

function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}

console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

// const result = getShippingMessage("Australia", 120, 50);
// console.log(result);

// const resultOne = getShippingMessage("Germany", 80, 20);
// console.log(resultOne);

// const resultTwo = getShippingMessage("Sweden", 100, 20);
// console.log(resultTwo);