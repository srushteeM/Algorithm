var Frect,Mrect;

function setup() {
  createCanvas(1200,800);
  Frect=createSprite(200, 200, 50, 80);
  Frect.shapeColor="green";
  Frect.debug=true;
  Mrect=createSprite(400,200,80,30);
  Mrect.shapeColor="green";
  Mrect.debug=true;
}

function draw() {
  background(0);
  
  Mrect.x=World.mouseX;
  Mrect.y=World.mouseY;
if(Mrect.x-Frect.x<Mrect.width/2+Frect.width/2){
  Mrect.shapeColor="red";
  Frect.shapeColor="red";
}else{
  Mrect.shapeColor="green";
  Frect.shapeColor="green";
}
  drawSprites();
}