const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var snow;
var background,background2;
var background2,backgroundImg2;

function preload(){
  backgroundImg = loadImage("snow2.jpg");
  backgroundImg2 = loadImage("snow1.jpg");
  boyImg = loadImage("winterboyimg.png");
  snowImg = loadImage("snow4.webp")
}


function setup() {
  var canvas = createCanvas(1200,1000);

  var background = createSprite(800,400);
  background.addImage(backgroundImg);



}

function draw() {

  if(keyCode === 32){

    var background2 = createSprite(800,400);
    background2.addImage(backgroundImg2);
    background2.scale = 3;

    var boy = createSprite(400,600);
    boy.addImage(boyImg);
    boy.scale = 0.2 ;


 }

 if (frameCount % 60 === 0){
  var snow = createSprite(400,100);
  snow.addImage(snowImg);
  snow.scale=0.2;
  snow.velocityY =2;
}
if (frameCount % 60 === 0){
  var snow = createSprite(200,100);
  snow.addImage(snowImg);
  snow.scale=0.2;
  snow.velocityY =5;
}


if (frameCount % 60 === 0){
  var snow = createSprite(600,100);
  snow.addImage(snowImg);
  snow.scale=0.2;
  snow.velocityY =3;
}
if (frameCount % 60 === 0){
  var snow = createSprite(800,100);
  snow.addImage(snowImg);
  snow.scale=0.2;
  snow.velocityY =5;
}
if (frameCount % 110 === 0){
  var snow = createSprite(1000,100);
  snow.addImage(snowImg);
  snow.scale=0.2;
  snow.velocityY =5;
}

if (frameCount % 90 === 0){
  var snow = createSprite(500,100);
  snow.addImage(snowImg);
  snow.scale=0.2;
  snow.velocityY =3;
}

if (frameCount % 80 === 0){
  var snow = createSprite(700,100);
  snow.addImage(snowImg);
  snow.scale=0.2;
  snow.velocityY =5;
}
if (frameCount % 120 === 0){
  var snow = createSprite(900,100);
  snow.addImage(snowImg);
  snow.scale=0.2;
  snow.velocityY =2;
}
if (frameCount % 70 === 0){
  var snow = createSprite(1100,100);
  snow.addImage(snowImg);
  snow.scale=0.2;
  snow.velocityY =5;
}

  background(255,255,255);  
  drawSprites();



  textSize(25);
  fill ("pink")
  text("press space to wake shiva",200,200);

  textSize(25);
  fill ("darkblue")
  text("it will be fun",300,250);


  textSize(30);
  fill ("black")
  text("it's snowing!",1000,250);


}