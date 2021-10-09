function findVowels (word) {
  let lowerLetters = word.toLowerCase();
  let letters = lowerLetters.split('');
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelsInWord = [];
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] == 'a' || letters[i] == 'e' || letters[i] == 'i' || letters[i] == 'o' || letters[i] == 'u') {
      let hasVowel = vowelsInWord.includes(letters[i]);
      if (hasVowel == false) {
        vowelsInWord.push(letters[i]);
        }
  } 
  }
  console.log("Vowels: " + vowelsInWord);
  }
  

 findVowels("Umuzi");
