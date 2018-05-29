// Create a function that takes two arguments (item, times).
// The first argument (item) is the item that needs repeating while the second argument (times) is the number of times
// the item is to be repeated. Return the result in an array.
//     Examples
// "edabit", 3 ➞ ["edabit", "edabit", "edabit"]
//
// 13, 5 ➞ [13, 13, 13, 13, 13]
//
// "7", 2 ➞ ["7", "7"]
//
// 0, 0 ➞ []
//
// example:
// item = "tom dick and harry"
// times = 6

function repeat(item, times) {
    return Array(times).fill(item)
}

// '[\'tom dick and harry\', \'tom dick and harry\', \'tom dick and harry\', \'tom dick and harry\', \'tom dick and harry\', \'tom dick and harry\']'
