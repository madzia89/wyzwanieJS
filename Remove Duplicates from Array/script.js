function removeDups(arr) {
    var sorted = arr.sort()
    var koniec = arr.length -1
    var lewy = 0
    var prawy = 0

    while ( lewy < koniec && prawy <= koniec){
        if (prawy < koniec){
            prawy++
        }
        if (sorted[lewy] == sorted[prawy]){
            sorted.splice(prawy,1)
            prawy--
            koniec--
        } else {
            lewy ++
        }
    } return sorted
}

//Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential
// //order as the old array (minus duplicates).


//opcja bez sortowania:
function removeDups(arr) {
    var sorted = arr
    var koniec = arr.length -1
    var lewy = 0
    var prawy = 0

    while ( lewy < koniec && prawy <= koniec){
        if (prawy < koniec){
            prawy++
        }
        if (sorted[lewy] == sorted[prawy]){
            sorted.splice(prawy,1)
            prawy--
            koniec--
        }
        if ((prawy == koniec) && (lewy != koniec)){
            lewy ++
            prawy = lewy
        }
    } return sorted
}