#include "increasingTriplets.cpp"
#include <iostream>
#include <ostream>
#include <vector>

int main() {

  Solution sol;
  std::vector<int> nums = {20, 100, 10, 12, 5, 13};
  std::cout << (sol.increasingTriplet(nums) ? "True" : "False") << std::endl;

  return 0;
}
