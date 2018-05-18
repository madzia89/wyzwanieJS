// Ceate a function that takes a string and returns the middle character(s).
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle two characters.

function getMiddle(str) {
    const myStr = str.split("")
    const divided = myStr.length
    let check = divided / 2
    const floor = Math.floor(check)
    if ((divided % 2) == 0){
        return myStr[floor-1]+myStr[floor]
    } else {
        return myStr[floor]
    }

}

