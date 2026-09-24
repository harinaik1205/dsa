//Problem Statement:
//Given an array of numbers, return the first number that appears more than once. if there are no duplicates, return null.

//Example:
//[3,1,4,2,1,4] --> output: 1

function firstDuplicateNumber(arr) {
  const obj = {};
  if (!arr || arr.length == 1) return null;

  for (let num of arr) {
    if (obj[num] && obj[num] >= 1) {
      obj[num] += 1;
      return num;
    } else {
      obj[num] = 1;
    }
  }

  return null;
}

const arr = [3, 1, 4, 2, 5, 6];
console.log(firstDuplicateNumber([3, 1, 4, 2, 1, 4])); // 1
console.log(firstDuplicateNumber([1, 2, 3, 4, 5])); // null
console.log(firstDuplicateNumber([1, 1])); // 1
console.log(firstDuplicateNumber([1, 2, 2, 3])); // 2
console.log(firstDuplicateNumber([1, 2, 3, 3])); // 3
console.log(firstDuplicateNumber([5, 4, 3, 2, 1, 5])); // 5
console.log(firstDuplicateNumber([1, 2, 1, 2])); // 1
console.log(firstDuplicateNumber([1, 1, 2, 2, 3, 3])); // 1
console.log(firstDuplicateNumber([1, 2, 3, 2, 1])); // 2
console.log(firstDuplicateNumber([7, 7, 7, 7])); // 7

console.log(firstDuplicateNumber([1, 2, 3, 4, 1, 2, 3])); // 1
console.log(firstDuplicateNumber([-1, -2, -3, -2])); // -2
console.log(firstDuplicateNumber([-1, 0, 1, 0])); // 0
console.log(firstDuplicateNumber([0, 0])); // 0
console.log(firstDuplicateNumber([-5, -5, -1, 2])); // -5
console.log(firstDuplicateNumber([1.5, 2.5, 3.5, 2.5])); // 2.5
console.log(firstDuplicateNumber([1, -1, 1, -1])); // 1
console.log(firstDuplicateNumber([1000000, 2, 3, 1000000])); // 1000000
console.log(firstDuplicateNumber([3, 1, 2, 3, 2])); // 3
console.log(firstDuplicateNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // null

// Edge cases
console.log(firstDuplicateNumber([])); // null
console.log(firstDuplicateNumber([42])); // null
console.log(firstDuplicateNumber([42, 42])); // 42
console.log(firstDuplicateNumber([-1])); // null
console.log(firstDuplicateNumber([0])); // null

// Important: first duplicate encountered
console.log(firstDuplicateNumber([5, 1, 2, 5, 1])); // 5
