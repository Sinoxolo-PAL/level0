function intToTime (int) {
  var hours = Math.floor (int / 60);
  var min = int % 60;
  console.log(hours + " hours," + " " + min + " minutes");
}

intToTime(71);
intToTime (133);