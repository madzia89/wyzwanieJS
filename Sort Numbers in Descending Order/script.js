var num = 444111888555333

function sortDecending(num) {
    var numer = num.toString().split("")
    var change = numer.map(function (numberek) {
        return numberek * 1
    })
    return change.sort().reverse().join("") * 1
}

//Create a function that takes any nonnegative number as an argument
// and return it with it's digits in descending order. Descending order is when you sort from highest to lowest.