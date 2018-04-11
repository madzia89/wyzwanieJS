var string = "L0ND0N"

function correct(string){

    var spl = string.split(" ")

    for (var i = 0; i < spl.length; i++)
    {
        if ( spl[i] === '5' )
        {
            spl[i] = 'S'
        }
        else if ( spl[i] === '0' )
        {
            spl[i] = 'O'
        }
        else if ( spl[i] === '1' )
        {
            spl[i] = 'I'
        }
    }
    return spl.innerHTML = spl.join(" ")
}