// Create a function that takes an array of numbers and returns an array where each number is the sum of itself + all previous numbers in the array.
//     Examples
//     [1, 2, 3] ➞ [1, 3, 6]
//
//     [1, -2, 3] ➞ [1, -1, 2]
//
//     [3, 3, -2, 408, 3, 3] ➞ [3, 6, 4, 412, 415, 418]

const array = [3, 3, -2, 408, 3, 3, 0, 66, 2, -2, 2, 3, 4, 2, -47, 3, 3, 2]
function cumulativeSum(array) {
    console.log (array.reduce((a, x, i) => [...a, x + (a[i-1] || 0)], []))
}