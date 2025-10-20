function maxVowels(s: string, k: number): number {
  let p = 0;
  let maxCount = 0;
  while (p < s.length) {
    let count = 0;
    const sub = s.substring(p, k).toLowerCase()
    sub.split('').forEach(val => {
      console.log(val)
      if (['a', 'e', 'i', 'o', 'u'].includes(val)) {
        console.log(val)
        count++;
      }
    })
    if (count > maxCount) {
      maxCount = count
    }
    p += k
  }
  return maxCount
}

console.log(maxVowels("tryhard", 4))
