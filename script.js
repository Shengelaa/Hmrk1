//! Pirveli 1)

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

// const positive = nums
//   .filter((number) => number > 0)
//   .reduce((acc, num) => acc + num, 0);
// const negative = nums
//   .filter((number) => number < 0)
//   .reduce((acc, num) => acc + num, 0);

// console.log(positive);
// console.log(negative);

//! Meore 2)

// const nums = [1, 17, 32, 15, 5, 6, 7, 8, 17, 60, 11, 22, 30];

// const filter = nums.map((num) => num * 2).filter((num) => num % 3 === 0);

// console.log(filter);

//! Mesame 3)

//? Zaan gamichirda

// function small(nums) {
//   if (nums.length < 2) return null;

//   nums.sort((fst, sec) => fst - sec);
//   return nums[0] + nums[1];
// }

// const nums = [10, 50, 1, 12, 2, 99];
// console.log(small(nums));

//! Meotxe 4)

//? Zaan gamichirda. Searchit. gavakete

// function Biggest(first, second) {
//   return first.map((num, index) => Math.max(num, first[index]));
// }

// let first = [13, 64, 15, 17, 88];
// let second = [23, 14, 53, 17, 80];

// console.log(Biggest(first, second));

//! Mexute 5)

const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

const names = characters.map((character) => character.name);
console.log(names);

const firstNames = characters.map((character) => character.name.split(" ")[0]);
console.log(firstNames);

const eyeColorCount = characters.reduce((acc, character) => {
  acc[character.eye_color] = (acc[character.eye_color] || 0) + 1;
  return acc;
}, {});

console.log(eyeColorCount);
