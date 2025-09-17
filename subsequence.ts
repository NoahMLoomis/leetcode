function isSubsequence(s: string, t: string): boolean {
  let sCount = 0;

  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[sCount]) {
      sCount++;
    }
  }

  if (sCount >= s.length) return true;
  return false;
}
