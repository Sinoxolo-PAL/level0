function findVowels (word) {
  var letters = word.split('');
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var vowelsInWord = [];
  for (var i = 0; i < letters.length; i++) {
  if  (letters.includes(vowels[i]) && !(vowelsInWord.includes(letters[i]))) {
    vowelsInWord.push(vowels[i]);
  } 
  }
  return ("Vowels: " + vowelsInWord);
  }
  

  findVowels("muzi");
  findVowels("sino");
  findVowels("unique");
