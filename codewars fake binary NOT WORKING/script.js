function fakeBin(x){
    x = x *1
    var myArray = new Array()

    myArray.push(x)

    for (var i = 0; i < myArray.lenght; i++){

        if (myArray[i] >= 5){

            myArray[i] = 1
        }
        else {
            myArray[i] = 0
        }
        return myArray
    }

}

//nie działa, why!!!???