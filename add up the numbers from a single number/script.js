function addUp(num ) {
    var koniec = num || 0
    var poczatek = 0
    var wynik = 0
    while (poczatek <= koniec){
        wynik += poczatek
        poczatek ++
    } return wynik
}

//funkcja która dodaje do siebie liczby 4 = 1+2+3+4 = 10