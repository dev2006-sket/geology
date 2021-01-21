class Iron {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.3,
          'friction':5.0,
          'density':10.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
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
      fill("grey");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  