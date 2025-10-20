function getElementsOnlyInList(nums1: number[], nums2: number[]): number[] {
  const onlyInNums1 = new Set();
  const existsInNums2 = new Set();
  nums2.forEach((n => existsInNums2.add(n)))

  for (let i = 0; i < nums1.length; i++) {
    if (!existsInNums2.has(nums1[i])) {
      onlyInNums1.add(nums1[i])
    }
  }
  return [...onlyInNums1] as number[]
}


function findDifference(nums1: number[], nums2: number[]): number[][] {
  return [getElementsOnlyInList(nums1, nums2), getElementsOnlyInList(nums2, nums1)]
};
console.log(findDifference([1, 2, 3], [2, 4, 6]))
