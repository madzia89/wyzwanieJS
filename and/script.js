var array = [2,5,9,10]
var result = array && array.length // js najpierw sprawdza cyz array jest true, następnie sprawdza czy array.length jest true
//ponieważ obie zmienne są true var result przyjmie wartość ostatniego elementu
console.log(result) //4 bo array.length = 4

//gdyby któraś z wartości w zdaniu && byłaby false, result przyjąłby wartość false a nie wartość tabeli
