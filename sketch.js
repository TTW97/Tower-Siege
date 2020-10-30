//This creates name-spacing for all the Matter things
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//This is all the variables
var engine, world;
var holder, ball, ground;
var stand1, stand2;
var ball;
var slingShot;
var polygon_img;
var score;
var hour;
var backgroundImg;
var bg;


function preload() {
  //This gives the polygon an image
  polygon_img = loadImage("polygon.png");

  getTime();
}

function setup() {

  createCanvas(900, 400);
  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

  score = 0;

  //This creates all of the blocks, base, and grounds
  ground = new Base();
  stand1 = new Ground(390, 300, 250, 10);
  stand2 = new Ground(700, 200, 200, 10);

  //level one
  block1 = new Block(340, 275, 40, 40);
  block2 = new Block(360, 235, 40, 40);
  block3 = new Block(380, 275, 40, 40);
  block4 = new Block(400, 235, 40, 40);
  block5 = new Block(420, 275, 40, 40);
  block6 = new Block(380, 195, 40, 40);
  blocks1 = new Block(650, 175, 40, 40);
  blocks2 = new Block(690, 175, 40, 40);
  blocks3 = new Block(670, 135, 40, 40);
  blocks4 = new Block(730, 175, 40, 40);
  blocks5 = new Block(710, 135, 40, 40);
  blocks6 = new Block(690, 95, 40, 40);

  //This creates a ball for the image to go over
  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);

  //This is the slingshot
  slingShot = new Slingshot(this.ball, { x: 100, y: 200 });
}
function draw() {

  //This is the bckground color

  if (backgroundImg) {
  
    background(backgroundImg);

  }

  //This displays two texts
  textSize(20);
  fill("black");
  text("Press space for more chances",100,30);
  text("Score : " + score,750,350);

  //This makes all of the blocks score and display
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  blocks1.score();
  blocks2.score();
  blocks3.score();
  blocks4.score();
  blocks5.score();
  blocks6.score();

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  blocks6.display();

  imageMode(CENTER);
  image(polygon_img, ball.position.x, ball.position.y, 40, 40);
}

//This is the function mouseDragged and MouseReleased, and keyPressed
function mouseDragged() {

  Matter.Body.setPosition(this.ball, { x: mouseX, y: mouseY });

}

function mouseReleased() {

  slingShot.fly();

}

function keyPressed() {

  if (keyCode === 32) {

    slingShot.attach(this.ball);

  }
  
}

async function getTime() {

  console.log();

  var response = await fetch("http://worldtimeapi.org/api/timezone/America/Los_Angeles");
  var responseJSON = await response.json();

  
  var datetime = responseJSON.datetime;

  

  hour = datetime.slice(11,13);

  if (hour >= 06 && hour <= 18) {

    bg = "bg.png";
    console.log(bg);

  }

  else {

    bg = "bg2.jpg";

  }

  backgroundImg = loadImage(bg);
  

}
