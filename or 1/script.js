true && false // wyrzuci false bo jedna z tych części nie jest prawidziwa a && sprawdza całość

true || false //wyrzuci true bo wystarczy, że jedna strona jest prawdziwa. Js kończy sprawdzanie na pierwszej prawdziwej wartości

var arr = [2,5,6]

var x = arr || arr.length || arr [] //zwróci całą tablicę bo pierwsza wartość jest true, więc js nie sprawdza reszty