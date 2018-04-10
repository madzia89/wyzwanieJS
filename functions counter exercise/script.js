var counter = 0
    function name() {

       counter ++
        console.log("ta funkcja jest wywołana po raz " + counter + " ")
    }

// name()
// name()
// name()                                  /// wykona funkcję tyle razy ile razy ją wywołamy lub można wywołać ją pentlą tak jak poniżej
// name()
// name()
// name()
// name()
// name()

for (var i = 0; i < 10; i ++) {
    name()
}

//funkcja ma się wykonywać tak długo aż i nie będzie mniejsze od 10!