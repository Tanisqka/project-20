//namespacing
//const= constant

const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Body=Matter.Body;


var engine;
var world;
var ground;
var ball;


function setup(){
createCanvas(400,400);

engine=Engine.create();
world=engine.world;


//to stop the ground from moving
//JSON data structure
var ground_options={
isStatic:true
}


//create ground

ground=Bodies.rectangle(200,380,40 ,20,ground_options);
World.add(world,ground)
console.log(ground)


var ball_options={
  restitution:0.5,frictionAir:0.1
}

//make ball here
ball=Bodies.circle(100,10,20,ball_options);
World.add(world,ball)
console.log(ball)




rectMode(CENTER)
ellipseMode(RADIUS)

}



function draw(){
  background(0);

Engine.update(engine);
ellipse(ball.position.x,ball.position.y,20)
rect(ground.position.x,ground.position.y,400,20);

}

