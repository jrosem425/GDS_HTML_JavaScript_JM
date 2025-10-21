console.log("Hello World")


var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d")

var person ={
    first: "Jamie",
    last: "Miller",

    firstAndLastName: function()
    {
        alert("My name is: "+ this.first + this.last)
    }
}

console.log(person.first)
// person.firstAndLastName()


//key value pair (can only have one) called square
//or can have a class (will learn about classes next class)
var square={
    x: 500,
    y: 500,
    color: "red",
    width: 100,
    height: 100,

}

// create a square usong our KeyValue object
ctx.fillStyle=square.color
ctx.fillRect(square.x,square.y,square.width,square.height)


// For Loops

for (var i = 0; i<20; i++)
{
    console.log(2*i)
}

for(var s=0; s<20; s++)
{
    ctx.fillStyle = "darkviolet"
    ctx.fillRect(s * 5 * 20, s*5*20, 20, 20)
}


// arrays

//adding to the array
var colors = []
colors[0] = "red"
colors[1] = "olive"
colors[2] = "yellow"


//predefined array
var person =["Jamie","Jason","Amanda"]


console.log(colors[1])
colors[4]="blue"
console.log(colors[4])

var twoDArray =[
    [1, 1, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2],
    [3, 3, 3, 3, 3, 3, 3, 3],
    [4, 4, 4, 4, 4, 4, 4, 4]
]


// all arrays have a length parameter attached to them
// which tells the programmer how many objects are in the array
for(var x=0; x<twoDArray.length; x++)
{
    console.log(twoDArray[x][4])
}

// double for loop

for(var xCord = 0; xCord<twoDArray.length;xCord++)
{
    for(var yCord = 0; yCord<8; yCord++)
    {
        console.log(twoDArray[xCord][yCord])
    }
}

// while loop

var whileInt = 0;
while(whileInt < 20* 4)
{
    whileInt++;
    console.log(whileInt)
}