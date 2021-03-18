function common (first, second) {
  var firstList = first.split('');
  var secondList = second.split('');
  var commonLetters = [];
  for (var a =0;a < firstList.length;a++)
  for (var i =0;i < secondList.length;i++) {
    if (secondList.includes(firstList[i]) && !(commonLetters.includes(firstList[i]))) {
      commonLetters.push(firstList[i]);
      
    }
  }return console.log("common letters: " + commonLetters);
}

common("fix", "six");