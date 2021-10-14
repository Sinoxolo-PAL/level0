function maximum(firstNum, secondNum, thirdNum) {
  if (firstNum > secondNum && firstNum > thirdNum) {
     return firstNum;
  } else if (secondNum > firstNum && secondNum > thirdNum) {
     return secondNum;
  } else {
     return thirdNum;
  }
}

console.log(maximum(1, 2, 3));
