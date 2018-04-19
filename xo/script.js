function XO(str) {
    var lower = str.toLowerCase().split("")
    var counterX = 0
    var counterO = 0
    for (var i = 0; i < lower.length; i++){
        if (lower[i] == 'x'){
            counterX ++
        }else if (lower[i] == 'o'){
            counterO ++
        }
    }
    if (counterX == counterO){
        return true
    } else return false

}

//Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.