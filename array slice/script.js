// var m = [41, 58, 69, 82, 100]
// var sliced = m.slice(1,3)
// console.log(m)              //sliced nie wpływa na wygląd tablicy przed wycięciem
// console.log(sliced)         //wyrzuci elementy które wycięliśmy (1 i 2) trzeci element nie zostanie wycięty, bo poprzez (1,3) wskazujemy perwszy element do wycięcia i wszystki var sliced = m.sliced(1,3)epomiędzy nim a drugą pozycją, ale sama druga pozycja nie zostanie ruszona)

var someArray = []
var myArray = someArray
for (var i = 0; i <= 9; i++){
    even = (Math.round(Math.random()*10)) * 2
    someArray[i] = even
}
console.log(someArray)

var sliceArray = myArray.slice(1,5)
console.log(sliceArray)

console.log(myArray)

//spr Math.ceil!!!!!!!