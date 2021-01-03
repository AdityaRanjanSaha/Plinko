class Particle{
    constructor(x,y,r){
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x, y, r/2, options);
        this.r = r;
        this.x = x;
        this.y = y;
        World.add(world, this.body);
        this.trajectory = [];


    }
    display(){
        /*for(var i = 10;i<this.trajectory.length;i=i+10){
            body(this.body,this.trajectory[i][400],this.trajectory[i][1]);
          }*/
        var pos=this.body.position;
        push();
        fill("white");
        translate(pos.x, pos.y);
        circle(0,0, this.r );
        pop();
    }


}