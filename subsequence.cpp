#include <string>

class Solution {
public:
  bool isSubsequence(std::string s, std::string t) {
    int sCount = 0;
    for (int i = 0; i < t.length(); i++) {
      if (t[i] == s[sCount]) {
        sCount++;
      }
    }

    if (sCount >= s.length()) {
      return true;
    }
    return false;
  }
};
