// Code your solutions in this file

// For Loop
// syntax - for ([initialization]; [condition][iteration]) {[loop body]}

// for (let age = 30; age < 40; age++) {
//   console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }
//   return gifts;
// }

// wrapGifts(gifts);

function writeCards(array, event) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    debugger;
  }
  return newArray;
}

// console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

// WHILE LOOP
// syntax -
// while ([condition]) {
// [loop body]
// }

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  let i = 0;
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++;
  }
  return gifts;
}

wrapGifts(gifts);

// example - while loop
// let countUp = 0;
// while (countUp < 10) {
//   console.log(countUp++);
// }

// example - for loop
// for (let countUp = 0; countUp < 10; countUp++) {
//   console.log(countUp);
// }

function countDown(num) {
  if (num <= 0) {
    console.log("Please enter a number greater than 0");
  } else {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  }
}

console.log(countDown(10));
