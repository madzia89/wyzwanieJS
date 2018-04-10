
(function(){
var counter = 0
    function name() {

       counter ++
        console.log("ta funkcja jest wywołana po raz " + counter + " ")
    }
for (var i = 0; i < 10; i ++) {
    name()
}
})()

console.log(counter)


//użycie IIFE funkcji z zadania functons1 console log nie może się odwołać do counter bo jest to lokalna zmienna - znajduje sie w funkcji do której console.log nie ma dostępu.