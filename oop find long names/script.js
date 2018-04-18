//find names that length is < 4, and >= 4
var names = ['Magda', "Olek", 'Stefan', "Kasia", "Ala"]
var nameCount = names.reduce(function(reduced, name){
    if (name.length < 4)
    {
        reduced.equal4 ++
    }

    else
    {reduced.equalMore ++
    }
    return reduced

}, {equal4: 0, equalMore: 0})

