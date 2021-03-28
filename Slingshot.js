class Slingshot{
    constructor(bodyA, bodyB){
        var options ={
            bodyA:bodyA,
            bodyB:bodyB, 
            length:10, 
            stiffness:0.04 
        }
        this.constraint = constraint.create(options)
        World.add(world, this.constraint)
    }
        display(){
            var pointA = this.constraint.bodyA.position 
            var pointB = this.constraint.bodyB.position
            strokeWeight(4)
            line(pointA.x, pointA.y, pointB.x, pointB.y)
        }

}