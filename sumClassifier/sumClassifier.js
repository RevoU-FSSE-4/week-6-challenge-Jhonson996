function sumClassifier(numbers) {
  // Your code here
  let sumResult = "";
  let num = 0;

  for (let i = 0; i < numbers.length; i++){
    num += numbers[i];
  }
  
  if (num > 10){
    sumResult = "Large Sum";
  } else if (num < 10){
    sumResult = "Small Sum";
  } else {
    sumResult = "Equal Sum";
  }
  return sumResult;
}
module.exports = sumClassifier;
