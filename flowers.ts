function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let numFlowersPlantable = 0;

  for (let i = 0; i <= flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      const isLeftEmpty = i === 0 || flowerbed[i - 1] === 0;
      const isRightEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;
      if (isRightEmpty && isLeftEmpty) {
        flowerbed[i] = 1;
        numFlowersPlantable++;
      }
    }
  }
  return numFlowersPlantable >= n;
}

console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2));
