var milkTemp = 20

for(;;){

    someTemp = Math.round(Math.random()*10)

    milkTemp += someTemp
    console.log(milkTemp)

    if (milkTemp>=100) break

} console.log(milkTemp)

//Task 6 day 2
// Boil milk using while loop, start with milkTemp 20

while (milkTemp<=100){
    milkTemp+= Math.random()
}console.log(milkTemp)

for (var milkTemp = 20; milkTemp <=100; milkTemp += Math.random()){}
console.log(milkTemp)