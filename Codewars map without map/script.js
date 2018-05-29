//Oh no, the map method for arrays has been disabled. Can you fix it?
Array.prototype.map = function(mapFunction){
    var thisArr = this
    var newArr = []

    thisArr.forEach(function(el, i, arr){
        newArr[i] = mapFunction(el, i, arr)
    })

    return newArr
}