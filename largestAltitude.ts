function largestAltitude(gain: number[]): number {
  let highest = 0;
  let currHeight = 0;

  for (let i = 0; i < gain.length; i++) {
    currHeight += gain[i]
    if (currHeight > highest) {
      highest = currHeight
    }
  }

  return highest;
};
console.log(largestAltitude([-5,1,5,0,-7]))
console.log(largestAltitude([-4,-3,-2,-1,4,3,2]))

