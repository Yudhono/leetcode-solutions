const haystack = "leetcode";
const needle = "leeto";

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length === 0) {
    return 0;
  }
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let j = 0;
      while (j < needle.length) {
        if (haystack[i + j] !== needle[j]) {
          break;
        }
        j++;
      }
      if (j === needle.length) {
        return i;
      }
    }
  }
  return -1;
};

console.log(strStr(haystack, needle));
