function Game(containerSelector){
    containerSelector = containerSelector || 'body'
    this.gameContainer = document.querySelector(containerSelector)
    this.boardElement = null
    this.step = 2            //mówi o ile będzie przesunięcie przy ruchu
    this.snakeArray = [{x: 25, y: 25}]
     //tablica z pozycją snejka
}

Game.prototype.init=function(){
    this.makeBoard() // myGame nit ma odniesienie do makeBoard gdzie jest makeBoard więc nie jest to odniesienie do lokalnej zmiennej
    this.renderSnake()


}

Game.prototype.renderSnake = function(){        // na podstawie obiektów chcemy zamienić pozycję snake
    this.snakeArray.forEach((function(position){
        //dla każdej pozycji musimy wyrysować snake
        this.placeSnakeBodyCell(position.x, position.y)
    }).bind(this))      // bind tworzy nową funkcję która przekazuje this.placSnakeBodyCell poza tego thisa funkcję, bo inaczej ten this w środku będzie rzekazywać window zamiast właściwości tej funkcji  ///////////// to można też zapisać forem jak u Mateusza w przykładzie.
}

Game.prototype.placeSnakeBodyCell = function(x, y) {        //renderuje snejka
    var cell = document.createElement('div')
    cell.style.width = this.step + '%'
    cell.style.height = this.step + '%'
    cell.style.backgroundColor = 'blue'
    cell.style.position = 'absolute'
    cell.style.top = y * this.step + '%'
    cell.style.left = x * this.step + '%'

    this.boardElement.appendChild(cell)
}

Game.prototype.makeBoard = function(){          // board się nie zmienia!
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