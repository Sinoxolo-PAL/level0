function maximum(a, b, c) {
  var max = 0;
  if (a > b && a > c) {
     console.log (a);
  } else if (b > a && b > c) {
     console.log (b);
  } else {
     console.log (c);
  }
}

maximum(1, 2, 3);