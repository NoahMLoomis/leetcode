function maxArea(height: number[]): number {
  let start = 0;
  let end = height.length - 1;
  let mostWater = 0;
  while (start < end) {
    let maxHeight = height[start];
    if (height[start] > height[end]) {
      maxHeight = height[end];
    }
    const area = maxHeight * (end - start);

    if (area > mostWater) {
      mostWater = area;
    }
    if (height[start] > height[end]) {
      end--;
    } else if (height[start] < height[end]) {
      start++;
    } else {
      start++;
      end--;
    }
  }
  return mostWater;
}
