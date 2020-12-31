
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground , box1 , box2 , box3 , paper1;
var bobDiameter = 50
function setup() {
	createCanvas(600, 400);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(300,100,600,20);
	bob1 = new Bob(200,300,50);
	bob2 = new Bob(250,300,50);
	bob3 = new Bob(300,300,50);
	bob4 = new Bob(350,300,50);
	bob5 = new Bob(400,300,50);
	rope1 = new Rope(bob1.body,roof.body,200,100)
	rope2 = new Rope(bob2.body,roof.body,250,100)
	rope3 = new Rope(bob3.body,roof.body,300,100)
	rope4 = new Rope(bob4.body,roof.body,350,100)
	rope5 = new Rope(bob5.body,roof.body,400,100)
	//Bob.shapeColor = "purple";
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(100);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}



