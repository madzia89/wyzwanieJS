var x = '45385593107843568'

function fakeBin(x){
    x = x *1
    var y = x.split(" ")
    for (var i = 0; i < x.lenght; i++){
        if (y.lenght(i) >=5)
        {
            y.lenght[i] = 1
        }
        else {
            y.lenght[i] = 0
        }
        return y
    }
}