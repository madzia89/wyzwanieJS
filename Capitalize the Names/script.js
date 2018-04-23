//Create a function that takes an array of names and returns an array with the first letter capitalized.

function capMe(arr) {
    var maps = arr.map(function(el){
        el = el.toLowerCase()
        var splitted = el.split("")
        var first = splitted[0]
        first = first.toUpperCase()
        splitted[0] = first
        return splitted.join("")
    })
    return maps
}