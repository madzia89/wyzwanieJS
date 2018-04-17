function Game(containerSelector) {
    containerSelector = containerSelector || 'body'
    this.gameContainer = document.querySelector(containerSelector)
    this.gameInterval = null        //zwraca identyfikator interwału, ana koniec będziemy chcieli go zatrzymać i zapisać
    this.boardElement = null
    this.step = 2            //mówi o ile będzie przesunięcie przy ruchu
    this.direction = 'right' // najpierw ma iść w prawo
    this.snakeArray = [
        {x: 25, y: 25},
        {x: 24, y: 25},
        {x: 23, y: 25},
        {x: 22, y: 25}
    ]
    //tablica z pozycją snejka
}

Game.prototype.init = function () {
    // myGame init ma odniesienie do makeBoard gdzie jest makeBoard więc nie jest to odniesienie do lokalnej zmiennej
    this.makeBoard()
    this.renderSnake()
    this.makeGameTick()
}

Game.prototype.makeGameTick = function () {
    // funkcja będzie się rytmicznie odpalać
    this.gameInterval = setInterval(
        this.gameTick.bind(this),
        1000
    )

}

Game.prototype.GameTick = function () {
    this.moveSnake()       //pokaże nam co się dzieje co sekundę (zgodnie z interwałem)
}
Game.prototype.moveSnake = function () {
    //chcemy przesunąć snake który jest renederowany z tablicy
    //najpierw sprawdzamy gdzie ma się przesunąć , element pozycji zależy od pozycji glowy
    var snakesHead = this.snakeArray.slice(0, 1)[0] //pierwszy element z tablicy to głowa
    //w zależności od direction będziemy przesuwać głowę w inne miejsce,
    var newSnakesHead
    switch (this.direction) {
        case 'right':
            newSnakesHead = {
                x: snakesHead.x + 1,
                y: snakesHead.y
            }
            break
    }
    if (!this.checkValidityOfMove(newSnakesHead.x, newSnakesHead.y)) {
        alert('you lose!')
        return
    }
    this.snakeArray = [newSnakesHead].concat(
        this.snakeArray.slice(0, -1)
    )
    this.renderSnake()
}



Game.prototype.renderSnake = function () {        // na podstawie obiektów chcemy zamienić pozycję snake
    this.boardElement.innerHTML = ''  // fixme gdy będzie jedzenie
    this.snakeArray.forEach((function (position) {
        //dla każdej pozycji musimy wyrysować snake
        this.placeSnakeBodyCell(position.x, position.y)
    }).bind(this))      // bind tworzy nową funkcję która przekazuje this.placSnakeBodyCell poza tego thisa funkcję, bo inaczej ten this w środku będzie rzekazywać window zamiast właściwości tej funkcji  ///////////// to można też zapisać forem jak u Mateusza w przykładzie.
}

Game.prototype.checkValidityOfMove = function (newX, newY) {
    var if (NewPositionMatchasOld = !(this.snakeArray.filter(function(snakeBodyCellPosition)){
        return snakeBodyCellPosition.x === newS && snakeBodyCellPosition.y === newY
    }).length)
    //chcemy tu przekazać newSnakesHead z funkcji move snake
    if (
        newX < 0
        ||
        newX > (100 / this.step)
        ||
        newY < 0
        ||
        newY >= (100 / this.step)
    ) {
        return false
    }


    return true
}

Game.prototype.endGame = function () {
    clearInterval(this.gameInterval)
    alert('you lose!')
}
Game.prototype.placeSnakeBodyCell = function (x, y) {        //renderuje snejka
    var cell = document.createElement('div')
    cell.style.width = this.step + '%'
    cell.style.height = this.step + '%'
    cell.style.backgroundColor = 'blue'
    cell.style.position = 'absolute'
    cell.style.top = y * this.step + '%'
    cell.style.left = x * this.step + '%'

    this.boardElement.appendChild(cell)
}

Game.prototype.makeBoard = function () {          // board się nie zmienia!
    var board = document.createElement('div') // ta zmienna jest lokalna
    board.style.width = '50vh'
    board.style.height = '50vh'
    board.style.position = 'relative'
    board.style.border = '2px solid black'
    board.style.margin = '0 auto'

    this.gameContainer.appendChild(board)
    this.boardElement = board // ta zmienna będzie dostępna dla każdej metody odpalanej w grze
}

var myGame = new Game() //utworzenie obiektu gry
myGame.init()   // inicjalizacja gry