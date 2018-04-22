//Create a function that takes an object and returns the keys and values as separate arrays.

function keysAndValues(obj) {
    var arrForAll = []

    var keysFromObj = Object.keys(obj)
    arrForAll.push(keysFromObj)

    var valuesFromObj = [];
    for( var key in obj ) {
        if ( obj.hasOwnProperty(key) ) {
            valuesFromObj.push(obj[key]);
        }
    }
    arrForAll.push(valuesFromObj)
    return arrForAll

}