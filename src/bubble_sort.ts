function bubbleSort(nums: number[]) {
  let flag = false;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (i === 0) {
        console.log(nums);
      }
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        flag = true;
      }
    }
    if (!flag) break;
  }
  return nums;
}

console.log(bubbleSort([4, 2, 7, 5, 1, 9, 6, 3, 8]));
