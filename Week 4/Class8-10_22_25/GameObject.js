

class GameObject{
    //this is what gets called when we do new game object
    //pass in the canvas object
    constructor(canvas)
    {
        this.x=0;
        this.y=0;
        this.width=0;
        this.height=0;
        //velocity on x axis
        this.vx=0;
        //velocity on y axis
        this.vy=0;
        //color of the object
        this.color="black";
        //reference to the canvas
        this.canvas=canvas;

    }

    //renders the object on the screen
    renderRect()
    {
        ctx.fillStyle=this.color
        ctx.fillRect(this.x,this.y,this.width,this.height)

    }

    //moves the object
    move()
    {
        this.x+=this.vx;
        this.y+=this.vy;
        if(this.x>this.canvas.width - this.width)
        {
            this.vx*=-1
        }
        
        if(this.y>this.canvas.height - this.height)
        {
            this.vy*=-1
        }
        
        if(this.x<50)
        {
            this.vx*=-1
        }
        
        if(this.y<50)
        {
            this.vy*=-1
        }
    }
}
