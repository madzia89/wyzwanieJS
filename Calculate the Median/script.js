// Create a function that takes an array of numbers and return its median.
//     Examples
//     [2, 5, 6, 2, 6, 3, 4] ➞ 4
//
//     [21.4323, 432.54, 432.3, 542.4567] ➞ 432.4
//
//     [-23, -43, -29, -53, -67] ➞ -43
// Notes
// Input can be any negative or positive number.
//     Array being passed must contain at least four numbers.
//     See Resources tab for info on calculating the median.
let arr =[20, 40, 20, 30, 50, 60, 70, 0, 20]
arr.sort((a, b) => a - b);
let lowMiddle = Math.floor((arr.length - 1) / 2);
let highMiddle = Math.ceil((arr.length - 1) / 2);
let median = (arr[lowMiddle] + arr[highMiddle]) / 2;

return median