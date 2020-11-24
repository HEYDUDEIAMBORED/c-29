class slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
        this.Sling = Constraint.create(options);
        this.pointB=pointB
        
        World.add(world, this.Sling);
        
    }

    display(){
        image(this.sling1,200,20)
        image(this.sling2,170,20)
       // image(this.sling3,200,20)
        if (this.Sling.bodyA){
        var pointA = this.Sling.bodyA.position;
        var pointB = this.pointB;

        push();
        
        strokeWeight(7);
        stroke(48,22,8);
        if (pointA.x<210){
            line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
            line(pointA.x-20,pointA.y,pointB.x+20,pointB.y);  
            image(this.sling3,pointA.x-30,pointA.y-10,15,30);
        }
        else {
            line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
            line(pointA.x+25,pointA.y,pointB.x+25,pointB.y);  
            image(this.sling3,pointA.x-30,pointA.y-10,15,30);
        }
        
        pop();
    }
       
    }
    fly(){
        this.Sling.bodyA=null
    }
}