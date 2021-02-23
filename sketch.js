const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, 
    world;

var stone;

var rubber;

var hammer;

var ground;

function setup(){

    var canvas = createCanvas(1200,1200);

    engine = Engine.create();

    world = engine.world;

    hammer = new Hammer(500,500);

    stone = new Stone(200,380);

    rubber = new Rubber(200,380,90,70);

    ground = new Ground(200,390,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();

    rubber.display();

    stone.display();

    hammer.display();

}