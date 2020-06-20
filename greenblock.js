class greenblock extends greenbaseclass {
  constructor(x, y){
    super(x,y,20,30);
    this.Visiblity = 255;
    this.image = loadImage("green.png");
  }
 display(){
  if(this.body.speed < 3){
    super.display();
  }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity-1;
     tint(255,this.Visiblity);
     image( this.image,this.body.position.x, this.body.position.y, 20, 30);
     pop();
   }
   }
  score(){
  if(this.Visiblity<0 && this.Visiblity>-105){
     score1++;
  }
};

};
    
  