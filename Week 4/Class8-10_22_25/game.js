var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d")



var timer = setInterval(main, 1000/60)


var x = 50;
var y = canvas.height / 2
var w = 100;
var h = 100;
var moveAmountX = 10;
var moveAmountY = 10;

//random number
//math.round = nearest integer
var randomNumber = Math.round(Math.random()*5)

//math.floor = always rounds down
var lowRandomNumber = Math.floor(Math.random()*5)

console.log(randomNumber)
console.log(lowRandomNumber)


var jimmyTheBox = new GameObject(canvas);
jimmyTheBox.x = 72;
jimmyTheBox.y = 84;
jimmyTheBox.width = 100;
jimmyTheBox.height = 100;
jimmyTheBox.color = "darkmagenta"
jimmyTheBox.vx = 5;
jimmyTheBox.vy = 5;


var paulTheBox = new GameObject(canvas)
paulTheBox.width = 50;
paulTheBox.height = 50;
paulTheBox.x = canvas.width / 2 - 25;
paulTheBox.y = canvas.height / 2 - 25;
paulTheBox.color= "blueviolet"
paulTheBox.vx = 5;
paulTheBox.vy = 5;


//the main function
function main()
{
    //clear canvas every frame
    ctx.clearRect(0,0,canvas.width,canvas.height)


    jimmyTheBox.renderRect();
    paulTheBox.renderRect();

    jimmyTheBox.move();
    paulTheBox.move();
  


    //update out object's position
    x+=moveAmountX;
    y+=moveAmountY;

    //draw our object
    ctx.fillStyle = "darkviolet"

    ctx.beginPath();
    ctx.arc(x,y,50,0,2*Math.PI);
    ctx.fill();

    //stay in boundary of canvas
    //if positio is greater than the width of the canvas
    //minus half of the width of the circle

    if(x>canvas.width - 50)
    {
        moveAmountX*=-1
        jimmyTheBox.color="blue"
    }

    if(y>canvas.height - 50)
    {
        moveAmountY*=-1
        jimmyTheBox.color="black"
    }

    if(x<50)
    {
        moveAmountX*=-1
        jimmyTheBox.color="darkslateblue"
    }

    if(y<50)
    {
        moveAmountY*=-1
        jimmyTheBox.color="darkmagenta"
    }
}