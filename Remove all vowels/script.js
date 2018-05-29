// Create a function that takes a string and returns a new string with all vowels removed.
//     Examples
// "I have never seen a thin person drinking Diet Coke." ➞ " hv nvr sn  thn prsn drnkng Dt Ck.")
//
// "We're gonna build a wall!" ➞ "W'r gnn bld  wll!"
//
// "Happy Thanksgiving to all--even the haters and losers!" ➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"
// Notes
// "y" is not considered a vowel.
//     Expect a valid string for all test cases.

function silenceTrump(str) {
    const sliced = str.split('')
    const filtered = sliced.filter(differentthatnvowel => {
        return differentthatnvowel !== 'a' &&
            differentthatnvowel !== 'A' &&
            differentthatnvowel !== 'e' &&
            differentthatnvowel !== 'E' &&
            differentthatnvowel !== 'i' &&
            differentthatnvowel !== 'I' &&
            differentthatnvowel !== 'o' &&
            differentthatnvowel !== 'O' &&
            differentthatnvowel !== 'u' &&
            differentthatnvowel !== 'U'
    })
    return filtered.join('')
}

