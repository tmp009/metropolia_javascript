const even = (numberArray) => {
  return numberArray.filter((a) => a % 2 == 0);
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = even(numbers);

console.log(`Original Array ${numbers}`);
console.log(`Even Numbers Array ${evenNumbers}`);
