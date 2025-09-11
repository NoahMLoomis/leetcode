function increasingTriplet(nums: number[]): boolean {
  let min1 = Infinity;
  let min2 = Infinity;
  for (const n in nums) {
    if (n <= min1) {
      min1 = n;
    } else if (n <= min2) {
      min2 = n;
    } else {
      return true;
    }
  }
  return false;
}

// console.log(increasingTriplet([2, 4, -2, -3]));
console.log(increasingTriplet([20, 100, 10, 12, 5, 13]));
