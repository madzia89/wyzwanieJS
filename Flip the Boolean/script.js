// Create a function that reverses a boolean value and returns the string "boolean expected"
// if another variable type is given.
//     Examples
// true ➞ false
//
// false ➞ true
//
// 0 ➞ "boolean expected"
//
// null ➞ "boolean expected"
// Notes
// If the input is not a boolean, return the string "boolean expected".
//     If you get stuck on a challenge, find help in the Resources tab.
//     If you're really stuck, unlock solutions in the Solutions tab.

function reverse(bool) {
    if(typeof(bool) === 'boolean'){
        return !bool
    } else return 'boolean expected'
}
