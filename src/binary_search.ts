/**
 * 二分查找
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function binraySearch(nums: number[], target: number) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
}

console.log(binraySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));
