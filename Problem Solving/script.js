"use strict";
// Find Index of Element Without Using .indexOf()

// Given [10, 20, 30, 40] and a target 30, find its index in the array.

const numbers = [10, 20, 30, 40];
for (let i = 0; i <= numbers.length - 1; i++) {
  if (numbers[i] === 30) {
    console.log(`The index of the element 30 is :`, i);
  }
}

// Remove All Occurrences of a Given Element
// Given [1, 2, 3, 2, 4] and target 2, remove all 2s from the array.

const numArr = [1, 2, 3, 2, 4];
const newNumArr = [];
for (let i = 0; i <= numArr.length - 1; i++) {
  if (numArr[i] === 2) continue;
  newNumArr.push(numArr[i]);
}
console.log(newNumArr);

// 28. Find Product of All Elements
// Given [2, 3, 4], calculate the product of all numbers

const allNum = [2, 3, 4];
let productOfNum = 0;
// productOfNum = allNum[0] * allNum[1] * allNum[2];

for (let i = 0; i <= allNum.length - 1; i++) {
  productOfNum = allNum[i];
  productOfNum = productOfNum * productOfNum;
}
console.log(productOfNum);

// Find oldest person (Find the person with highest age)

const people = [
  { name: "A", age: 25 },
  { name: "B", age: 30 },
  { name: "C", age: 20 },
];

let max = 0;
for (let i = 0; i <= people.length - 1; i++) {
  if (max < people[i].age) {
    max = people[i].age;
  }
  console.log("Highest Age is:", max);
}
