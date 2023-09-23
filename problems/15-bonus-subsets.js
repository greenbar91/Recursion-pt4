/***********************************************************************
 * BONUS PROBLEM
************************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:


Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
1. Those that do not contain 3 (all of these are subsets of [1, 2]).
2. For every subset that does not contain 3, there is also a corresponding
subset that is the same, except it also does contain 3.
***********************************************************************/

const subsets = (arr, index = 0, currentSubset = [], result = []) => {
  if (index === arr.length) {
    result.push([...currentSubset]);
    return result;
  }

  // Include the current element in the current subset
  currentSubset.push(arr[index]);
  subsets(arr, index + 1, currentSubset, result);

  // Exclude the current element from the current subset
  currentSubset.pop();
  subsets(arr, index + 1, currentSubset, result);

  return result;
};
console.log(subsets([])) // [[]]
console.log(subsets([1])) // [[], [1]]
console.log(subsets([1, 2])) // [[], [1], [2], [1, 2]]
console.log(subsets([1, 2, 3])) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
