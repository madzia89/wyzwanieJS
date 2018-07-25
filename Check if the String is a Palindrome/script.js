// A palindrome is a word, phrase, number or other sequence of characters which reads the same backward or forward,
// such as madam or kayak.
//     Write a function that takes a string and determines whether it's a palindrome or not.
// The function should return a boolean (true or false value).
// Examples
// "A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!" ➞ true
//
// "Neuquen" ➞ true
//
// "Not a palindrome" ➞ false
// Notes
// Should be case insensitive.
//     Special characters (punctuation or spaces) should be ignored.

let str = 'A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!'
function isPalindrome(str) {
    let newer = str.toLowerCase().replace(/\s/g, '').replace(/[^\w\s+/]/gi, '').trim().split('').reverse().join('')
    if (newer === str.toLowerCase().replace(/\s/g, '').replace(/[^\w\s ]/gi, '').trim()) {
        return true
    }
    else {return false}
}