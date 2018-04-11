function fakeBin(x){

    var m = x.split("")

    for (var i = 0; i < m.length; i++){

        if (m[i] >= 5){ m[i] = 1}

        else if (m[i] < 5){ m[i] = 0}
    }
    return m

}
