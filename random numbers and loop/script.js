var tab = [] //
var count = 0

for (var i = 0; i < 10; i++){

    tab[i] = Math.random()

    if (tab[i] <0.5) count++
console.log(tab[i])
} console.log ("jest " + count + " liczb mniejszych niż 0.5")


//losujemy 10 randomowych liczb i sprawdzamy, ile z nich jest mniejsze niż 0.5