class stone{
    constructor(x,y,radius){
        var options = {
            isStatic : false
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius =radius;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 50,50);
    }
}