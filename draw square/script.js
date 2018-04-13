var square = {          //tworzymy zmienną z obiektem. otwarcie klamerką jest równoznaczne z tworzeniem obiektu
    x: 6,               // x = properities - właściwości: pozycja lewego górnego rogu
    y: 6,               //pozycja lewego górnego rogu
    a: 3,               //długość a
    getArea: function (){       //metoda zwracająca powierzchnię kwadratu
        return this.a*this.a    //this oznacza odnoszenie się do obecnego obiektu
    },
    //metoda zwraca czy punkt jest wewnątrz square a zwrócić true, false
    collide: function(){
        if ((this.x <= point.px) &&
            (this.x + this.a >= point.px) &&
            (this.y >= point.py) &&
            (this.y - this.a < point.py)){
        console.log("you collide")}
        else {console.log("you don't collide")}
    }
            }

//wywołanie: square.getArea()

var point = {               //robimy punkt!
    px: 10,
    py: 4,

 }

console.log(square.collide())
//
//
//
// console.log(point.px) //po kropce za zmienną możemy odwołać się do property z tej zmiennej w tym wypadku px, możemy się w ten sposób odołać się także do funkcji tylko że wówczas console.log pokaże nam zawartość funkcji - musimy dodać puste nawiasy aby wywołać tę funkcję
//
// console.log(square['getArea']()) //to jest również odwołanie do funkcji w obiekcie z jednoczesnym jej wywołaniem
//
// point['x'] = 2 //możemy w ten sposób przypisać nową wartośc do prop obiektu
// //kropkę js interpretuje jako bezpośrednie odwołanie się do obiektu
// var myVar = ['x']
// point[myvar] = 3 : przypisuje 3 do x
// point.myVar = 4 : nie zmienia wartości x, tylko dodaje nową właściwość do tej tablicy myVar


