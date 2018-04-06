var a = "1"

switch (a) {
    case 1:
        console.log("1")
        break;
    case "1":
        console.log("2")
        break
    case 2:
        console.log("3")
        break
    default:
        console.log("0")
        break
}

var b = 3
console.log(b == 3 ? "this is true" : "this is not true")

//if statement with checking 4 options
var taskVariable = "1"
var some = taskVariable === 1 ? "1"         //if its equal to 1 returns "1"
         : taskVariable === "1" ? "2"             //if its equal to "1" returns "2"
         : taskVariable === 2 ? "3"           //if its equal to 2 returns "3"
            : "0"                        //else it returns 0

console.log(some)