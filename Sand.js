class Sand {
    constructor(x, y) {
      var options = {
        'density':1,
        'friction':5,
        'restitution':0.3
      };
      this.x=x;
      this.y=y;
      this.r=r;
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 150;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(4);
      stroke("black");
      fill("red");
      rectMode(CENTER)
      ellipse(0,0,this.r, this.r);
      pop();
    };
  };
  