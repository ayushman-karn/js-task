const inputArray = [10, 20, 30, 44, 55, 66, 76, 87, 98, 101];

//The below function calculates the sum of given array
const accumulator = (inputArray) =>
  inputArray.reduce((acc, curr) => acc + curr);

console.log(accumulator(inputArray));
