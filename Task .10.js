function commonChar(string1, string2) {
  let common = [];
  let word1 = string1.split("");
  let word2 = string2.split("");

  for (let x of word2) {
    for (let j of word1) {
      if (
        x.toLowerCase() === j.toLowerCase() &&
        !common.includes(x.toLowerCase())
      ) {
        common.push(x.toLowerCase());
      }
    }
  }

  console.log("Common letters:" + common);
}

commonChar("tshEpon", "moOnene");
