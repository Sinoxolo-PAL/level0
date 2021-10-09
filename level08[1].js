function intToTime (int) {
  let hours = Math.floor (int / 60);
  let min = int % 60;
  if (min > 1 && hours > 1) {
    return hours + " hours," + " " + min + " minutes";
  } else if (min > 1 && hours === 1) {
    return hours + " hour," + " " + min + " minutes";
  } else if (min === 1 && hours > 1) {
    return hours + " hours," + " " + min + " minute";
  } else if (min === 0 && hours === 1) {
    return hours + " hour";
  } else if (hours === 0 && min > 1) {
    return min + " minutes";
  } else if (min === 0 && hours >=1) {
    return hours + " hours";
  } else if (min === 1 && hours ===0) {
    return min + " minute";
  }
}

console.log(intToTime(51));
console.log(intToTime(601));
console.log(intToTime(120));
console.log(intToTime(134));
