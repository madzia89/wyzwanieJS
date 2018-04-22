var sth = [1,2,3]

var myMap = (function myMap(arr) {
    var times2 = []
    var first = this
    for (var i = 0; i < first.length; i++){
        times2.push(arr(first[i], i, first))
    }
    return times2
})()

console.log(myMap, sth)