function findVowels (word) {
  var letters = word.split('');
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var vowelsInWord = [];
  for (var i = 0; i < letters.length; i++) {
  if  (letters.includes(vowels[i]) && !(vowelsInWord.includes(letters[i]))) {
    vowelsInWord.push(vowels[i]);
  } 
  }
  return console.log("Vowels: " + vowelsInWord);
  }
  
 // return console.log(vowels);

  findVowels("muzi");
  findVowels("sino");
  findVowels("unique");