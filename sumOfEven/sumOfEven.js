function sumOfEvens(numbers) {
  // Your code here
  let sumEven = 0;
  let message = 0;

  for ( let i = 0; i < numbers.length; i++){

    if(numbers[i] === 0){
      sumEven = 0;
    } else if (numbers[i] % 2 === 0){
      sumEven += numbers[i];
    } 
  }
  
  if (sumEven === 0 ){
    return message;
  } else{
    return sumEven;
  }

}
module.exports = sumOfEvens;
