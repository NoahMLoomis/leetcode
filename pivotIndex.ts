function pivotIndex(nums: number[]): number {
  let total = nums.reduce((prev, curr) => prev + curr)
  let leftSum = 0
  for (let i = 0; i < nums.length; i++) {
    let rightSum = total - leftSum - nums[i]
    if (leftSum === rightSum) {
      return i
    }
    leftSum += nums[i]
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
