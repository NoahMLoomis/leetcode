/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let lastNonZeroFoundAt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const temp = nums[lastNonZeroFoundAt];
      nums[lastNonZeroFoundAt] = nums[i];
      nums[i] = temp;
      lastNonZeroFoundAt++;
    }
  }
}
