function celToFer (tempInCel) {
  return (tempInCel * 1.8) + 32;
}

function ferToCel (tempInFer) {
  return (tempInFer - 32) / 1.8;
}

console.log(celToFer (30));
console.log(ferToCel (66));
