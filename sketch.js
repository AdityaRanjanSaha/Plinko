const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var particles =[];
var plinkoes=[];
var divisions=[];
var ground=[];



function setup() {
  var canvas = createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;
  
    ground = new Ground(100,height,600,20);
  for(var a=0;a<=width;a=a+80){ 
   particles.push( new Particle(a,50,10));
  }
  
  
  divisions = new Division(5,540,5,200);













}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  particles.display();
divisions.display();
}