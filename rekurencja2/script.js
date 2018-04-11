var numbers = [1,2,3,4,5,6]
var sum = 0
function calculateSum(arr, i){   //w funkcji podajemy aktualny index
    sum = sum + arr[]			// suma globalna musi być równa sumie obecnej oraz aktulany index
    // chcemy wywoływać tę tablicę dopóki index jest mniejszy niż długość tej tablicy
    if(i<arr.length -1)				// dopóki i jest mniejsze niż ostatni index arr
        calculateSum(arr, i)			// chcemy liczyć sumę zawierającą tablicę i ten index
}

//do sumy chcemy dodać aktualną liczbę, musimy określć skąd ta liczba się bierze

//przekazujemy tablicę którą liczymy i aktualny index


function getTogether (arr, i){
    i = i || 0
    sum = sum + arr[i]
    if(i<arr.length -1)
        getTogether(arr, i + 1)
}
//wywołanie: getTogether(letters )
//cd wywołania: suma