function areaOfTriangle (b, h, s) {
 var semiPerimeter = 0.5 * (b + h + s);
 var area = Math.sqrt(semiPerimeter * ((semiPerimeter - b)*(semiPerimeter - h)*(semiPerimeter - s)))
 return area;
}
