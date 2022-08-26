/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  num = nums.sort((a, b) => b - a);
  return !(Array.isArray(nums) && nums.length > 0) ? 0 : nums.map((e, i) => {
    return (e - 1) * (i === nums.length - 1 ? 0 : nums[i + 1] - 1)
  }).sort((a, b) => b - a)[0]
};

console.log(maxProduct([1,5,4,5]))