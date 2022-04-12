function printVowels(word) {
  let vowels = /[aeiou]/gi;
  let letters = [];
  let alphabet = word.split("");

  for (let vowel of alphabet) {
    if (vowel.match(vowels) && !letters.includes(vowel.toLowerCase())) {
      letters.push(vowel.toLowerCase());
    }
  }
  console.log("vowels: " + letters);
}

printVowels("umuzi");
