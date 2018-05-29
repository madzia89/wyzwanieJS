function addUp(num) {
    var arr = Array.from(num.toString()).map(Number)
    var numer = arr.reduce(function(result, value) {
        return result += value;
    },0)
    return numer
}

//sumowanie wszystkich cyfr złożonych w liczbę