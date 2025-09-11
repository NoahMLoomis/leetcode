function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const maxCandies = Math.max(...candies);
  return candies.map((c) => c + extraCandies >= maxCandies);
}

kidsWithCandies([1, 2, 3, 5], 2);
