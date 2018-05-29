function missingNums(arr) {
    var sorted = arr.sort(function (a, b) {  return a - b;  })

    for (var i = 0; i <= sorted.length; i++){
        if (i+1 != sorted[i]){
            return i+1
        }
    }

}

// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
