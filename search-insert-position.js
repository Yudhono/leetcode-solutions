const nums = [1, 3, 5, 6];
const target = 2;

var searchInsert = function (nums, target) {
  const resultSearch = nums.findIndex((num) => num === target);

  if (resultSearch === -1) {
    nums.push(target);
    nums.sort((a, b) => a - b);
    return nums.findIndex((num) => num === target);
  }

  return resultSearch;
};

console.log(searchInsert(nums, target));
