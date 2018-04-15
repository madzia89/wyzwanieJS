function minMaxLengthAverage(arr) {

    var min = Math.min(...arr)
    var max = Math.max(...arr)
    var sec = arr.length
    var av = arr.reduce(function(result, value){
        return result + value
    },0)
    var ave = av / sec
    var blah = [min, max, sec, ave]
    return blah
}

//it returns an array consisting of basic array min value, max value, length, and avarage