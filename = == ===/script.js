var a = 3
var b = "3"
 console.log (a === b)

var c = 4
var d = "4"

console.log(c !== d)
var d = +d //changes d into a number although it was a string before)
console.log(typeof d)

console.log (+true) //returns 1
console.log(typeof +true) //number because it's 1!
console.log (+null)//returns 0
console.log(typeof +null)//returns number because it's 0 !
console.log([] ===[]) //false
console.log(Infinity === Infinity)
console.log(isFinite(Infinity))
console.log(isFinite(29))