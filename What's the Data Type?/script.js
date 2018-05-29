// Create a function that returns the data type of a given variable. These are the eight data types this challenge will be testing for:
// Array
// Object
// String
// Number
// Boolean
// Null
// Undefined
// Date
// Examples
// dataType([1, 2, 3, 4]) ➞ "array"
//
// dataType({key: "value"}) ➞ "object"
//
// dataType("This is an example string.") ➞ "string"
//
// dataType(new Date()) ➞ "date"

function dataType(value) {
    var typeczki = value
    if (typeczki instanceof Array){
        typeczki = 'array'
    }
    else if(typeczki instanceof Date){
        typeczki = 'date'
    }
    else if (typeczki === undefined){
        typeczki = "undefined"
    }
    else if (typeczki === null){
        typeczki = "null"
    }
    else {typeczki = typeof (typeczki)}

    return typeczki
}