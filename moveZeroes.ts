/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let count = 0;
  const nonZeroArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count++;
    } else {
      nonZeroArr.push(nums[i]);
    }
  }

  for (let i = count - 1; i >= 0; i--) {
    nonZeroArr.push(0);
  }

  for (let i = 0; i < nums.length - count; i++) {
    nums[i] = nonZeroArr[i];
  }

  for (let i = nonZeroArr.length; i < nonZeroArr.length + count; i++) {
    nums[i] = nonZeroArr[i];
  }

  console.log(nums);
}

moveZeroes([0, 1, 0, 3, 12]);
