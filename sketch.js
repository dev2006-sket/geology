
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var stone1;
var hammer1;
var rubber1;
var Ground;
var sand1;
var sand2;
var sand3;
var iron;
function setup() {
	

	//Create the Bodies Here.
	var canvas = createCanvas(1200,400);
	stone1 = new Stone(200,300,50,50);
	Ground = new ground(600, 200, 1200, 20);
	hammer1 = new Hammer(100, 300, 100, PI/2);
	rubber1 = new Rubber(100, 500, 10);
	sand1 = new Sand(100, 520, 3);
	sand2 = new Sand(100, 20, 3);
    iron = new Iron(200, 800, 100, 100);
	sand3 = new Sand(100, 100, 3);
	engine = Engine.create();
	world = engine.world;

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  hammer1.x = world.mouseX
  hammer1.y = world.mouseY

  Engine.update(engine);
  stone1.display();
  Ground.display();
  hammer1.display();
  rubber1.display();
  sand1.display();
  sand2.display(); 
  sand3.display();
  iron.display();
  drawSprites();
 
}



