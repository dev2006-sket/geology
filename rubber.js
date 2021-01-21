class Rubber {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1
      }
      Matter = Bodies.circle(x, y, radius,[options], [maxSides]);
      
      
      World.add(world, Matter);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      rectMode(CENTER);
      push();
      translate(pos.x, pos.y);
      rotate(angle);
  
      strokeWeight(4);
      stroke("green");
      fill(255);
      circle(0, 0, this.radius);
      pop();
    }
  };
  