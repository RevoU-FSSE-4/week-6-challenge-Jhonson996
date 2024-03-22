function sumOfEvens(numbers) {
  // Your code here
  let sumEven = 0
  for ( let i = 0; i < numbers.length; i++){

    if (numbers[i] % 2 === 0){
      sumEven += numbers[i];
    }
  }
  
  return sumEven;
}


module.exports = sumOfEvens;
