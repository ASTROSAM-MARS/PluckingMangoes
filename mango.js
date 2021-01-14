class mango {
    constructor(x,y,radius){
        var options = {
            isStatic : true, 
            restitution : 0.7,
            friction : 1
        }
        this.body = Bodies.circle(x,y,radius/2-30, options);
        this.radius = radius;
        this.di =radius/2;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.di, this.di);
    }
}