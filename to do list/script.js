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

function ToDoList(container) {
    //przekazujemy kontener przy tworzenu todolisty aby miała gdzie się wyświetlać
    container = container || document.body
    this.container = container
    //toDoLista powinna zawierać listę tasków, na początku pusta tablica
    this.tasks = []
}

//to dolista musi umieć dodawać taski które mają mieć opisy (description)
ToDoList.prototype.addTasks = function (description) {
    //do tablicy ododajemy nowy obiekt:
    var task = new Task(description)
    this.tasks = this.tasks.concat([task])
    this.render()
}

//funkcja ma nam wylogowywać wszystkie taski:
ToDoList.prototype.logTasks = function () {
    this.tasks.forEach(function (task) {
        console.log(task)
    })
    //lub
    //this.tasks.forEach(console.log)
}

//remove tasks. Jedyne co bezpośrednio identyfkuje dany task jest jego index w tablicy
ToDoList.prototype.removeTask = function (indexOfTask) {
    //deklarujemy nową tablicę w zmiennej
    this.tasks = this.tasks.filter(function (el, i) {
        return indexOfTask !== i
    })
    this.render()
}

ToDoList.prototype.toggleTask = function (indexOfTask) {
    var task = this.tasks[indexOfTask].toggleCompleted()
    //to po to aby zaznaczyć completed tylko jeżeli ten task istnieje tj. nie został usunięty
    if (task) task.toggleCompleted()

    this.render()
}

ToDoList.prototype.editTask = function (indexOfTask) {
    //zmiana opisu  taska
    var task = this.tasks[indexOfTask]
    if (task) task.changeDescription(description)
    this.render()
}

//piszemy metodę render która podaje aktualny stan ponieważ na górze powiedzielśmy że todolista jest w kontenerze, będziemy ten kontener aktualizować

ToDoList.prototype.render = function () {
    //odświeżamy kontener aby był pusty igotowy na zmiany!
    this.container.innerHTML = ''

    //najpierw musimy zrobić tyle diwów ile jest tasków czyli dla każdego tasku i jego indeksu tworzymy diva
    this.tasks.forEach(this.renderOneTask.bind(this)) //bind po to aby this.container z dołu odnosił się do kontenera z pierwszego rzędu funkcji
}
//render dla jednego taska
ToDoList.prototype.renderOneTask = function (task, i) {
    //tworzenie diva dla taska
    var div = document.createElement('div')

    //do diva dodajemy opis taska
    div.innerHTML = task.description

    //jeżeli task jest wykonany ma być przekreślony
    if (task.completed) {
        div.style.textDecoration = 'line-through'
    }

    //dodajemy eventlisenery aby nasłuchiwały nowych tasków
    //wpisana poniżej funkcja sięgnie po toggleTask z góry z indeksem klikniętego tasku
    div.addEventListener('click', (function () {
        this.toggleTask(i)
    }).bind(this))


    //dodajemy inny event na usuwanie taska z listy
    div.addEventListener('dblclick', (function () {
        this.removeTask(i)
    }).bind(this))


    //dołączamy diva do kontenera
    this.container.appendChild(div)
}



var tasker = new ToDoList()
tasker.addTasks('zad1')
tasker.addTasks('zad2')
tasker.addTasks('zad3')
tasker.addTasks('zad4')
tasker.logTasks()

//sposób na usunięcie taska:
// tasker.removeTask(0)
// console.log(tasker)

tasker.toggleTask(0) // przekreślenie wykonanego taska


//odświeżanie aktualnego stanu
tasker.render()

tasker.addTask('dupa')
tasker.editTask(3, 'dupa')




