function sumOfSquares(num1, num2) {
  // Your code here
  const square = num => num * num;
  let square1 = square(num1);
  let square2 = square(num2);
  
  let sumResult = square1 + square2;
  
  return sumResult;
}
module.exports = sumOfSquares;
