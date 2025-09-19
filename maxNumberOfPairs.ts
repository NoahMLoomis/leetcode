function maxOperations(nums: number[], k: number): number {
  let left = 0;
  let right = nums.length - 1;
  let count = 0;
  nums.sort((a, b) => a - b);

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === k) {
      count++;
      left++;
      right--;
    } else if (sum < k) {
      left++;
    } else if (sum > k) {
      right--;
    }
  }
  return count;
}
