// Create a function that takes a sequence of either strings or numbers,
// removes the surrounding duplicates and returns an array of items without any items
// with the same value next to each other and preserves the original order of items.
//     Examples
// "AAAABBBCCDAABBB" ➞ ["A", "B", "C", "D", "A", "B"]
//
// "ABBCcAD" ➞ ["A", "B", "C", "c", "A", "D"]
//
//     [1, 2, 2, 3, 3] ➞ [1, 2, 3]
// Notes
// The initial sequence of items can be either a string or an array.
//     Test cases are case sensitive.


let sequence = ("AAAABBBCCDAABBB")
function uniqueInOrder(sequence) {
    return Array.from(sequence).filter((x,i,a) => x !== a[i-1]);
}