function mergeAlternately(word1: string, word2: string): string {
  const newStr = [];
  const limit = word1.length >= word2.length ? word1.length : word2.length;
  for (let i = 0; i <= limit; i++) {
    if (i < word1.length) {
      newStr.push(word1[i]);
    }
    if (i < word2.length) {
      newStr.push(word2[i]);
    }
  }
  return newStr.join("");
}

console.log(mergeAlternately("cf", "eee"));
