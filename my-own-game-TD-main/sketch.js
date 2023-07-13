
var doodlejump,characterimg
var background,backgroundimg
var obstacle,obstacleimg
var obstaclegroup
function preload(){
  characterimg=loadImage("character.png");
  backgroundimg=loadImage('background.jpg');
  obstacleimg=loadImage("obstacle.png");
}

function setup(){
  createCanvas(900,500)
  
  bg=createSprite(450,250,900,500)
  bg.addImage("background",backgroundimg)
  bg.velocityY=3
  bg.scale=3.5
  doodlejump=createSprite(450,400,20,20);
  doodlejump.addImage("character",characterimg);
  doodlejump.scale=0.2;
  doodlejump.debug=true


  ground=createSprite(450,480,900,5)
 
  obstaclegroup=new Group() 
}

function draw(){
  background(backgroundimg);
 if (bg.y>900){
  bg.y=bg.height/2
 }
  if (keyDown('space')){
    doodlejump.velocityY=-10;

  }
  doodlejump.velocityY+=0.8;
  
  if (keyDown('left')){
    doodlejump.x-=5
  }

  if (keyDown('right')){
    doodlejump.x+=5
  }

 if (obstaclegroup.isTouching(doodlejump)){
  doodlejump.velocityY=0
 }

spawnObstacles()
  doodlejump.collide(ground);
drawSprites()
}

function spawnObstacles(){
  if (frameCount%80==0){
    obstacle=createSprite(random(50,900),0)
    obstacle.addImage('obstacle',obstacleimg)
 
    obstaclegroup.add(obstacle)

    obstacle.lifetime=600
    obstacle.velocityY=+3
  }
}