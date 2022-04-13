function commonChar(string1, string2) {
  const common = [];
  const word1 = string1.toLowerCase().split("");
  const word2 = string2.toLowerCase().split("");

  for (let x of word2) {
    for (let j of word1) {
      if (x.toLowerCase() === j && !common.includes(x)) {
        common.push(x);
      }
    }
  }

  console.log("Common letters: " + common);
}

commonChar("tshEpon", "moOnene");
