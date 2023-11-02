class Circle {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.isSmiling = false;
    this.img_live = loadImage('data/ghost_live.png')
    this.img_dead = loadImage('data/ghost_dead.png')
    this.hide = true;
  }
  
  display() {
    noStroke();
    imageMode(CENTER)
    if(!this.hide){
      if(this.isSmiling){
        image(this.img_live, this.x, this.y, this.size, this.size) // White ghost image.
      }
      else{
        image(this.img_dead, this.x, this.y, this.size, this.size) // Black ghost image. 
      }
    }
  } 
}
