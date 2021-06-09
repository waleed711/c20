const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ball;


function setup(){
createCanvas(400,400)

engine = Engine.create();
world= engine.world;
var option2 = {
  restitution: 1.5
}
ball = Bodies.circle(100,10,30,option2);
World.add(world,ball);

var options = {
isStatic:true
}



rectangle = Bodies.rectangle(10,370,400,5,options)
console.log(ball);
World.add(world,rectangle);

} 




function draw (){
background("white")
Engine.update(engine);
ellipse(ball.position.x,ball.position.y,50)
rect(rectangle.position.x,rectangle.position.y,400,5)
}



