class Stone {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
        
      }


      this.body = Bodies.rectangle(x, y, 70, 90, options);
  
      this.width = 50;
  
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
  
      var angle =this.body.angle;
  
      push();
  
      translate(pos.x, pos.y);
  
      rotate(angle);
  
      rectMode(CENTER);
  
      strokeWeight(4);
  
      stroke("grey");
  
      fill("black");
  
      rect(0, 0, this.width, this.height);
  
      pop();
    }
  };
  