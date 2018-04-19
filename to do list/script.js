//zaczynamy od funkcji kkoknstruktora dla odróżnienia nazwę tej funkcji rozpoczynamy dużą literą:
function Task(description) {
    //każdy obiekt będzie miał te wartości (chociaż inne)
    //zadanie ma w sobie jakąś treść tj. dskription
    // nazwy właściwości w js to pola
    this.description = description

    //po wpisaniu taska nie jest on na początku wykonany
    this.completed = false
}

//zadania będziemy przełączyć pomiędzy wykonanym a nie wykonanym: toggle

Task.prototype.toggleCompleted = function /*nie potrzebujemy tu żadnych argumentów*/() {

    //ponieważ zamieniamy pomiędzy true a false możemy to ozapisać w poniższy sposób
    //czyli po zaznaczeniu dany task zamieni się na przeciwny do obecnego
    this.completed = !this.completed
}

//task sam z siebie nie może się usunąć, może tylko zmieniać swój stan
Task.prototype.changeDescription = function (newDescription) {
    this.description = newDescription
}

function ToDoList() {
    //toDoLista powinna zawierać listę tasków, na początku pusta tablica
    this.tasks = []
}

//to dolista musi umieć dodawać taski które mają mieć opisy (description)
ToDoList.prototype.addTasks = function (description) {
    //do tablicy ododajemy nowy obiekt:
    var task = new Task(description)
    this.tasks = this.tasks.concat([task])
}

//funkcja ma nam wylogowywać wszystkie taski:
ToDoList.prototype.logTasks = function(){
    this.tasks.forEach(function(task){console.log(task)})
    //lub
    //this.tasks.forEach(console.log)
}

//remove tasks. Jedyne co bezpośrednio identyfkuje dany task jest jego index w tablicy
ToDoList.prototype.removeTask = function(indexOfTask){
    //deklarujemy nową tablicę w zmiennej
    this.tasks = this.tasks.filter(function(el, i){
        return indexOfTask !== i
    })
}

ToDoList.prototype.toggleTask = function (indexOfTask){
   var task =  this.tasks[indexOfTask].toggleCompleted()
    //to po to aby zaznaczyć completed tylko jeżeli ten task istnieje tj. nie został usunięty
    if(task) task.toggleCompleted()
}

ToDoList.prototype.editTask = function (indexOfTask){
    //zmiana opisu  taska
    var task = this.tasks[indexOfTask]
    if (task) task.changeDescription(description)
}

var tasker = new ToDoList()
tasker.addTasks('zad1')
tasker.addTasks('zad2')
tasker.logTasks()