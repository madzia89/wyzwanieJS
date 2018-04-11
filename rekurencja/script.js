var countFn function count(startNumber){ // zadeklarowanie zmiennej utrudnia zmianę referencji funkcji
    console.log(startNumber) //to jest to co funkcja ma robić
    if(startNumber>0)   //skoro liczymy od końca, to gdy będzie 0 zwtedy ma skończyć odliczać mówi kiedy funkcja ma skończyć robienie
        count(startNumber -1) //
}

//wywołanie funkcji z podaniem liczby odliczy nam od tej liczby do 0