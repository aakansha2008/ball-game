class Box{
    constructor(x , y , width , height){
        var options={
            isStatic: true
        }
        this.body = Bodies.rectangle (x , y , width , height, options );
    this.width = width;
    this.height = height;

    this.image = loadImage("sprite/dustbingreen.png");
    World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
    fill(255,255,255,0.5);
    rect(pos.x, pos.y, this.width, this.height);
    imageMode(CENTER);
    image(this.image, 0,0,this.r, this.r)
    }
}