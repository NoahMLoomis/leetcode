function decodeString(s: string): string {
  const stack: string[] = []
  let i = 0;
  while (i < s.length) {
    if (Number(s[i])) {
      let endBracket = i;
      while (s[endBracket] !== ']' || s[endBracket] !== '[') endBracket++;
      if (s[endBracket] === '[') decodeString(s.substring(endBracket))
      const repeatingString = s.substring(i + 2, endBracket)
      for (let x = 0; x < Number(s[i]); x++) {
        stack.push(repeatingString)
      }
      i = endBracket + 1
    } else {
      stack.push(s[i++])
    }
  }

  return stack.join('')
};

console.log(decodeString('2[abc]3[cd]ef'))
console.log(decodeString('3[a]2[bc]'))
console.log(decodeString('3[a2[c]]'))
