numbers.reduce(function(reduced, el, i, arr){
    if (el%2 === 0){
        reduced.even +=1
    } else {
        reduced.odd+=1}
    return reduced
}, {even: 0, odd: 0})

