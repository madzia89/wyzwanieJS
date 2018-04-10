var someArr = [1,2,3,4,5,6,7,8,9,10,1,2,3]

var firstNine = someArr.indexOf(9)
var secondNine = someArr.indexOf(9, firstNine+1)
if (secondNine == -1){
        someArr.push(9)
    }
secondNine = someArr.indexOf(9, firstNine+1)  //+1 bo szukamy 9 od miejsca następującego po pierwszej 9


console.log (firstNine)
console.log (secondNine)


///znajdź 9 w some Array, a potem drugą 9 w tym samym array, jeżeli nie ma dodat 9 na koniec some Arry