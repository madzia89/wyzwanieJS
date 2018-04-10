// var myStr = "some words in the string"
//
// var extrStr = myStr.slice(5, 10)
//
// console.log (extrStr)
//
// var consistA = extrStr.indexOf("a")
//
// console.log(consistA)

//task 0 day 3 -- extract second word (of a string containing several words) to another variable. Check if second word contains letter "a"

var myStri = "another strangs for a task"

var subStr = myStri.indexOf(" "); //pozycja pierwszej spacji - koniec pierwszego słowa

var subStr2 = myStri.indexOf(" ", subStr + 1)  //pozycja drugiej spacji - koniec drugiego słowa

var myStriSecondWord = myStri.slice(subStr, subStr2)

console.log(myStriSecondWord)

var consistA = myStriSecondWord.indexOf("a")

if (consistA === -1){
    console.log("it does not consist of a")
} else (console.log ("it consists of a at position " + consistA))
