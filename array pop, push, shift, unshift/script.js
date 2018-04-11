var newArr = [1,8,7,5,6]

newArr.unshift(0)           //adds 0 at the beginning
console.log(newArr)
// [0, 1, 8, 7, 5, 6]


newArr.push(6)              //adds 6 at the end
console.log(newArr)
//[0, 1, 8, 7, 5, 6, 6]


newArr.shift()              //removes first element of an array
console.log(newArr)
//[1, 8, 7, 5, 6, 6]

newArr.pop()                //removes last element of an array
console.log(newArr)
//[1, 8, 7, 5, 6]