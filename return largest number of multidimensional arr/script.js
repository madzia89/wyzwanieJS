function findLargestNums(arr) {
    var tablica
    tablica = arr.map(function(x){
        var max = Math.max.apply( null, x )
        return max
    });
    return tablica
}

/// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.