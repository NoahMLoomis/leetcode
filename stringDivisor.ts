function gcdOfStrings(str1: string, str2: string): string {
  console.log(`Comparing ${str1} and ${str2}`)
  while (str2.length > 0) {
    const str1Sub = str1.substring(0, str2.length)
    console.log(str1Sub)
    if (str1Sub.includes(str2)) {
      return str2
    }
    str2 = str2.substring(str2.length - 1)
  }
  return "";
}

// console.log(gcdOfStrings("ABCABC", "ABC"))
console.log(gcdOfStrings("ABABAB", "ABAB"))
