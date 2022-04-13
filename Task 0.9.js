function printVowels(word) {
  const vowels = /[aeiou]/gi;
  const letters = [];
  const alphabet = word.toLowerCase().split("");

  for (let vowel of alphabet) {
    if (vowel.match(vowels) && !letters.includes(vowel)) {
      letters.push(vowel);
    }
  }
  console.log("vowels: " + letters);
}

printVowels("umuziOO");
