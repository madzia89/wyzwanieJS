//Return the Highest and Lowest Numbers
//Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).

var str = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"

function highLow(str) {
    var numer = str.split(" ")
    var change = numer.map(function (numberek) {
        return numberek * 1
    })
    var changes2 = Math.max.apply(Math, change).toString()
    var changes1 = Math.min.apply(Math, change).toString()
    return changes2.concat(' ',changes1)
}