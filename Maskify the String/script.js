// Usually when you sign up for an account to buy something, your credit card number,
// phone number or answer to a secret question is partially obscured in some way.
// Since someone could look over your shoulder, you don't want that shown on your screen.
// Hence, the website masks these strings.
// Your task is to create a function that takes a string, transforms all but the last four characters into "#"
// and returns the new masked string.
//     Examples
// "4556364607935616" ➞ "############5616"
//
// "64607935616" ➞ "#######5616"
//
// "1" ➞ "1"
//
// "" ➞ ""
const str ="4556364607935616"
function maskify(str) {
    const strToArr = str.split("")

    if (strToArr.length <= 4){
        return strToArr.join('')
    } else {
        const countNr = strToArr.length - 4
        const removedFront = strToArr.splice(0, countNr)
        const removedBack = strToArr.splice(0)
        const mapped = removedFront.map( () => '#')
        const final = mapped.concat(removedBack)
        console.log(final.join(''))
    }
}