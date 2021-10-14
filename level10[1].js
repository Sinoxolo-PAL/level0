function common (first, second) {
  let firstList = first.split('');
  let secondList = second.split('');
  let commonLetters = [];
  for (let a =0;a < firstList.length;a++)
  for (let i =0;i < secondList.length;i++) {
    if (secondList.includes(firstList[i]) && !(commonLetters.includes(firstList[i]))) {
      commonLetters.push(firstList[i]);
      
    }
  }return ("common letters: " + commonLetters);
}

console.log(common("fix", "six"));
