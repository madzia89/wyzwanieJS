
var str = "String"
function doubleChar(str) {
    var arr = str.split('');
    var newArr = []
    for (var i = 0; i <= arr.length; i++) {
        newArr.push(arr[i]);
        newArr.push(arr[i]);
    }
    return newArr.join('');
}
console.log(doubleChar(str))