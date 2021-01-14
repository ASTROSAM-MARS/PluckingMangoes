class sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04, 
            length : 10
        }
        this.pointB = pointB;
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }

    fly(){
        this.body.bodyA = null;
    }

    display(){
        if(this.body.bodyA){
        var a = this.pointB;
        var b = this.body.bodyA.position;
        stroke("black");
        line(a.x, a.y, b.x,b.y);
        }
    }
}