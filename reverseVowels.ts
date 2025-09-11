function reverseVowels(s: string): string {
  const arr = s.split("");
  const vowels = new Set(["a", "e", "i", "u", "o", "A", "E", "I", "U", "O"]);
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    while (i < j && !vowels.has(arr[i])) i++;
    while (i < j && !vowels.has(arr[j])) j--;

    if (i < j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  }
  return arr.join('');
}
