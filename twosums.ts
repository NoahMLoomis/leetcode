function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  for (let i = 0; i <= nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [i, map.get(complement)]
    }
    map.set(nums[i], i)
  }
  return []
}

console.log(twoSum([3, 2, 4], 6));
