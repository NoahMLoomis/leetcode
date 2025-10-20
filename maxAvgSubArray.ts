function findMaxAverage(nums: number[], k: number): number {
  let sum = nums.slice(0, k).reduce((prev, curr) => prev + curr);
  let maxSum = sum;

  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  return maxSum / k;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
