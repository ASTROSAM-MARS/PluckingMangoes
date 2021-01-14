const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boyImage, boy;
var backImage;
var treeImage, tree;
var mango1, mango2, mango3, mango4, mango5, mango6;
var ground1;
var stone1;
var sling1;
var m, s;

function preload(){
	boyImage = loadImage("boy.png");
	backImage = loadImage("backImage.jpg");
	treeImage = loadImage("tree.png");
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(250,580);
	boy.addImage("boyIsHere", boyImage);
	boy.scale = 0.13;

	tree = createSprite(700,330);
	tree.addImage("treeIsHere", treeImage);
	tree.scale = 0.5;

	ground1 = new ground();
	stone1 = new stone(180, 500,20);
	mango1 = new mango(700, 100, 80);
	mango2 = new mango(750, 200, 120);
	mango3 = new mango(850, 250, 130);
	mango4 = new mango(550, 300, 100);
	mango5 = new mango(600, 200, 140);
	mango6 = new mango(700, 300, 110);
	sling1 = new sling(stone1.body, {x : 180, y  : 500}); 

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  background(backImage);
	drawSprites();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	stone1.display();
	sling1.display();

	detect(mango1, stone1);
	detect(mango2, stone1);
	detect(mango3, stone1);
	detect(mango4, stone1);
	detect(mango5, stone1);
	detect(mango6, stone1);

}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body, {x : mouseX, y : mouseY});
}

function mouseReleased(){
	sling1.fly();
}


function detect(lmango, lstone){
	m = lmango.body.position;
	s = lstone.body.position;
	var distance = dist(s.x, s.y, m.x, m.y);
	if(distance <= lmango.radius + lstone.radius)
	Matter.Body.setStatic(lmango.body, false);
}