function uniqueOccurrences(arr: number[]): boolean {
  const uniqueOccuranceMap = new Map()
  arr.forEach((s) => {
    if (!uniqueOccuranceMap.has(s)) {
      uniqueOccuranceMap.set(s, 1)
    } else {
      uniqueOccuranceMap.set(s, uniqueOccuranceMap.get(s) + 1)
    }
  })
  const set = new Set(uniqueOccuranceMap.values())
  return set.size === uniqueOccuranceMap.size
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]))
console.log(uniqueOccurrences([1, 2]))

