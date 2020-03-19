class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.015,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
       this.sling.bodyA = body; 
    }
    display(){
        image(this.sling1,175,70);
        image(this.sling2,150,70);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x<510){
                strokeWeight(10);
                stroke(48,22,8);
                line(pointA.x-50, pointA.y, pointB.x-35, pointB.y);
                line(pointA.x-50, pointA.y, pointB.x-5, pointB.y);
                image(this.sling3,pointA.x-30,pointA.y-15,10,40);
            }
/*            else{
                strokeWeight(4);
                stroke(48,22,8);
                line(pointA.x-50, pointA.y, pointB.x-35, pointB.y);
                line(pointA.x-50, pointA.y, pointB.x-50, pointB.y);
                image(this.sling3,pointA.x-30,pointA.y-15,10,40)  
            }*/
        }
    }
    
}