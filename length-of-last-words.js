var lengthOfLastWord = function (s) {
  let arr = s.trim().split(" ");
  let lastWord = arr[arr.length - 1];
  return lastWord.length;
};
