function intToTime (int) {
  var hours = Math.floor (int / 60);
  var min = int % 60;
  if (min > 1 && hours > 1) {
    return hours + " hours," + " " + min + " minutes";
  } else if (min > 1 && hours = 1) {
    return hours + " hour," + " " + min + " minutes";
  } else if (min = 1 && hours > 1) {
    return hours + " hours," + " " + min + " minute";
  } else if (min = 1 && hours = 1) {
    return hours + " hour," + " " + min + " minute";
  }
}

console.log(intToTime(71));
console.log(intToTime(133));
