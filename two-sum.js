//Problem statement:
// Given an array of numbers and a target, return the two numbers that add upto the target.

//Example: const numbers = [2,7,11,15], const target = 9, output=[2,7];
// nums = [3,2,4], target = 6, output = [2,4]

function twoSumBruteForce(numbers, target) {
  if (numbers.length == 0) return;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i, j];
    }
  }
}

function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const subTarget = target - nums[i];
    if (map.has(subTarget)) return [i, map.get(subTarget)];
    map.set(nums[i], i);
    console.log(map, subTarget);
  }
}

let numbers = [2, 7, 11, 15];
let target = 9;

// numbers = [3, 2, 4];
// target = 6;

console.log(twoSumBruteForce(numbers, target));
console.log(twoSum(numbers, target));
