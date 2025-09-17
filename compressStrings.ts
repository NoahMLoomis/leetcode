function compress(chars: string[]): number {
  let s = "";
  let i = 0;
  while (i < chars.length - 1) {
    let pointer = i + 1;
    let count = 1;
    while (chars[i] === chars[pointer]) {
      pointer++;
      count++;
    }
    if (count === 1) {
      s += chars[i];
    } else {
      s += `${chars[i]}${count}`;
    }
    i = pointer;
  }

  for (let i = 0; i < s.length; i++) {
    chars[i] = s[i];
  }
  return chars.length;
}
