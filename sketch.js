const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var top,left,right,bottom
let engine,world

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

  bottom =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top= new Ground(200,10,400,20);

}

function draw() {
  background(0,0,0);  

  bottom.show()
top.show()
right.show()
left.show()
  drawSprites();
}