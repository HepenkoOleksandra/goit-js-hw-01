'use strict'

function checkStorage(available, ordered) {
    let stocks = undefined;
    const orderGoods = ordered;
  const goods = available;
  if (goods < orderGoods) {
    stocks = "Not enough goods in stock!";
  } else {
     stocks = "Order is processed, our manager will contact you";
  }
    return stocks;
}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 150));
console.log(checkStorage(150, 180));

// const result1 = checkStorage(100, 50);
// console.log(result1);
// const result2 = checkStorage(100, 130);
// console.log(result2);
// const result3 = checkStorage(200, 20);
// console.log(result3);
// const result4 = checkStorage(200, 150);
// console.log(result4);
// const result5 = checkStorage(150, 180);
// console.log(result5);