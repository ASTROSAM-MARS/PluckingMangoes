class ground{
    constructor(){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(450, 650, 900, 10, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("green");
        rect(450, 650, 900, 10);
    }
}