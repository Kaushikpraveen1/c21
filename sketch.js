var rect1,car,wall;
var rect2;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 200, 50, 50);
  rect1.shapeColor = "red";
  rect2 = createSprite(200,200,40,40);
  rect2.shapeColor = "red";
  
  car=createSprite(200,200,50,50);
  car.shapeColor="red";
  car.velocityX= 5;

  wall=createSprite(600,200,50,50);
  wall.shapeColor="blue";
}

function draw() {
  background(0,0,0);  
  rect1.x = World.mouseX;
  rect1.y = World.mouseY;
  
 if (isTouching(rect1,rect2)){
   rect1.shapeColor="green";
   rect2.shapeColor="green";
 }else{
   rect1.shapeColor="red";
   rect2.shapeColor="red";
 } 
bounceOff(car,wall);
  drawSprites();
}

