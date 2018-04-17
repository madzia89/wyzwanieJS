function Dog(name, sound) {
    this.name = name
    this.sound = sound
}

Dog.prototype.sound = function () {
    console.log(this.sound)
}

Dog.prototype.speak = function () {
    console.log("Dogs don't speak")
}


var dog1 = new Dog("Reksio", "woof woof")

//wywołanie speak w kontekście Dof1 = Dog1.speak()//