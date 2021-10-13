function areaOfTriangle (b, h, s) {
 let semiPerimeter = 0.5 * (b + h + s);
 let area = Math.sqrt(semiPerimeter * ((semiPerimeter - b)*(semiPerimeter - h)*(semiPerimeter - s)))
 return area;
}
