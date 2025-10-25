/*-------------------------------------------
Game Setup
 1. canvas 
 2. context
 3. frame rate
 4. animation timer runs main function 60 frames per second
-------------------------------------------*/
var c = document.querySelector(`canvas`)
var ctx = c.getContext(`2d`)
var fps = 1000/60
var timer = setInterval(main, fps)

/*-------------INSTRUCTION--------------
Create variable calledd score to store amount of "pickups" collected
---------------------------------------*/
var score = 0;
/*--------------avatar------------
avatar is the "player controllable" Object
-----------------------------------*/
var avatar = new GameObject();
avatar.color = `#ff0099`;
avatar.vx = 2;
avatar.vy = 2;

/*--------------testPickup------------
testPickup is the example object used to demonstrate how the collision method works
NOTE: I called the method "overlaps()
-----------------------------------*/
var testPickup = new GameObject();
testPickup.x = 100;
testPickup.y = 100;
testPickup.w = 18;
testPickup.h = 18;
testPickup.color = `#2244ff`;

/*--------------powerups------------
1. amt is the amount of pickups
2. pickups is the array that holds all of the objects
3. The "for loop" creates the objects at random locations 
-----------------------------------*/
var amt = 50;
var pickups = [];

for(var i=0; i<amt; i++)
{
    pickups[i] = new GameObject();
    pickups[i].color = `#ffff00`;
    pickups[i].w = 18; 
    pickups[i].h = 18;
    pickups[i].x = rand(0, c.width);
    pickups[i].y = rand(0, c.height);
    
    /*---------don't start with pickups----------------
    The "while" loop below moves each pickup one pixel at a time if 
    it is overlapping the avatar when the game starts
    --------------------------------------------------*/

    while(pickups[i].overlaps(avatar))
    {
        if(pickups[i].x < avatar.x)
        {
            pickups[i].x-=1;
        }
        if(pickups[i].x >= avatar.x)
        {
            pickups[i].x++;
        }
    }
};

/*--------------main()------------------------
This is the function that makes the game work
---------------------------------------------*/

function main()
{
    //erases the screen
    ctx.clearRect(0,0,c.width,c.height); 

    //moves the player if the variables in the controls.js are equal to true
    if(d==true){ avatar.x += avatar.vx; }
    if(a==true){ avatar.x += -avatar.vx;}
    if(w==true){ avatar.y += -avatar.vy;}
    if(s==true){ avatar.y += avatar.vy; }

    /*-----------collision detection--------------------
    collision detection ALWAYS goes before the render and...
    usually goes after the movement of the objects
    ---------------------------------------------------*/

    //Keeps avatar on screen
    if(avatar.x < 0 + avatar.w/2){avatar.x = 0 + avatar.w/2;}
    if(avatar.x > c.width + -avatar.w/2){avatar.x = c.width + -avatar.w/2;}
    if(avatar.y < 0 + avatar.h/2){avatar.y = 0 + avatar.h/2;}
    if(avatar.y > c.height + -avatar.h/2){avatar.y = c.height + -avatar.h/2;} 


    //if the testPickup (blue box) is overlapping the avatar, 
    //the testPickup moves off the screen
    //the avatar changes color (just for fun)
    if(testPickup.overlaps(avatar))
    {
        testPickup.x = 1000;
        avatar.color = testPickup.color;
        /*----------INSTRUCTION------------
        increase the score by one
        -----------------------------------*/
        score+=1
    }

    for(var i=0; i<pickups.length; i++)
    {
        /*----------INSTRUCTION------------
        make the avatar "collect" the pickups and increase the score
        -----------------------------------*/
        if(pickups[i].overlaps(avatar))
        {
            pickups[i].x = 1000;
            score+=1
            avatar.color=randColor()
        }
       
        pickups[i].render();
    }

    testPickup.render();
    avatar.render();

   /*--------------text----------------*/
   //makes the text center aligned instead of left aligned
   ctx.textAlign = `center`;

    /*----------INSTRUCTION------------
    Set the context's font property to use 64px Arial 
    Draw the score on the canvas using the fillText() method
    HINT: You will have to research how this works 
    W3schools.com and your book can help
    -----------------------------------*/

    ctx.font = "64px, Arial";
    ctx.t
    ctx.fillText("Score: "+score, 25,15)

    
}

//random number generator
function rand(_low, _high)
{
    return Math.random()*(_high - _low) + _low;
}


//random colors
function randColor()
{
    var colors = [
                    "rgb(10,224,183)","rgb(35,31,33)","rgb(165,26,179)","rgb(48, 208, 20)","rgb(220, 20, 100)","rgb(50, 150, 200)",
                    "rgb(255, 165, 0)","rgb(128, 0, 128)","rgb(100, 200, 50)","rgb(255, 0, 0)","rgb(0, 255, 0)","rgb(0, 0, 255)",
                    "rgb(255, 255, 0)","rgb(128, 128, 128)","rgb(0, 0, 0)","rgb(42, 156, 185)","rgb(255, 192, 203)","rgb(218, 165, 32)",
                    "rgb(0, 128, 128)","rgb(255, 150, 230)","rgb(139, 69, 19)","rgb(0, 100, 0)","rgb(173, 216, 230)","rgb(255, 20, 147)",
                    "rgb(160, 32, 240)","rgb(144, 238, 144)","rgb(255, 105, 180)","rgb(128, 0, 255)","rgb(240, 230, 140)","rgb(127, 255, 0)",
                ]

    return colors[Math.floor(Math.random()*colors.length)]

}
