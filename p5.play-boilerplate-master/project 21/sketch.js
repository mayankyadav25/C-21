var bullet;
var wall;
var speed;
var weight;
var thickness;
var Lwall;
var Lbullet;
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)
  //speed=223;
  //thickness=40;
 // weight=32;


  bullet = createSprite(50, 200, 50, 30);
  bullet.shapeColor="yellow";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);

  bullet.velocityX = speed;
}

 

function draw() {
  background(0);  

  if(bullet.collide(wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(0,255,0)
    }
    if (damage<10) {
      wall.shapeColor=color(255,0,0)
    }

}
    console.log(thickness);
  drawSprites();
}

