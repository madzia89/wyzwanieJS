// Write a function that takes three input values (a, b, c) and returns the number of equal values.
//     Examples
// 3, 4, 3 ➞ 2
//
// 1, 1, 1 ➞ 3
//
// 3, 4, 1 ➞ 0
// Notes
// Your function must return 0, 2 or 3.


function equal(a, b, c) {
    if (a === b && a === c){
        return 3
    }
    if (a === b && a !== c){
        return 2
    }
    if (a !== b && a === c){
        return 2
    }
    if (a !== b && a !==c && b !== c){
        return 0
    }

    return 1
}


///shorter version:
