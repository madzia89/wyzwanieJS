function mean(arr) {
    var m = arr.length
    var wynik = wynik || 0
    for (var i = 0; i = arr.length; i++){
        var popped = arr.pop()
        wynik += popped
    }
    var c = wynik / m
    return c.toFixed(2)*1
}


//Create a function that takes an array of numbers and returns the mean average (fixed to two decimal places).