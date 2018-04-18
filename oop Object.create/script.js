var cat = {
    name: "Catty",
    sound: "miau",
    makeSound: function () {
        console.log(this.sound)
    }
}

var newCat = Object.create(cat)

newCat.sound = "Miauek"

console.log(newCat)
