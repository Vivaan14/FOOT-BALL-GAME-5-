var gameState = 1;
var score = 0;
var goal,goal1,goal2;
var boundary1,boundary2,boundary3,boundary4;
var player1 ;
var goalkeeper1;
var change1,change2;
var football1;
function preload(){
goal1Image = loadImage("GOAL POST.png");
goal2Image = loadImage("GOAL POST.png");
backgroundImage = loadImage("FOOTBALL FIELD.jpg");
goalkeeper1Image = loadImage("GOALKEEPER_1 (2).jpg");
goalkeeper2Image = loadImage("GOALKEEPER_1 (3).jpg")
circleImage = loadImage("CIRCLE.png")
greencircleImage = loadImage("green circle.jpg");
redcircleImage = loadImage("REDCIRCLE.png");
}
function setup() {
createCanvas(displayWidth,displayHeight);
goal1 = createSprite(width/4,30,200,50);
goal1.shapeColor="red";
goal1.addImage(goal1Image);
goal2 =createSprite(900,30,200,50)
goal2.shapeColor = "red";
goal2.addImage(goal2Image);
boundary1 = createSprite(0,0,20,1400);
boundary1.shapeColor = "white";
boundary2 = createSprite(0,710,2800,20);
boundary2.shapeColor = "white";
boundary3 = createSprite(1270,0,20,1400);
boundary3.shapeColor = "white";
boundary4 = createSprite(0,0,2800,20);
boundary4.shapeColor = "white";
boundary5 = createSprite(width/2,height/2,20,1400);
boundary5.shapeColor = "white";
block1 = createSprite(width/4-125,70,20,20);
block1.shapeColor = "orange"
block1.visible = false;
block2 = createSprite(width/4+125,70,20,20);
block2.shapeColor = "orange"
block2.visible = false;
player1 = createSprite(width/4,350,20,60);
player1.shapeColor = "blue";
goalkeeper1 = createSprite(width/4,100,20,20);
goalkeeper1.shapeColor = "yellow";
goalkeeper1.velocityX = 5;
goalkeeper1.addImage(goalkeeper1Image);
goalkeeper1.scale = 0.25
football1 = createSprite(width/4,330,20,20);
football1.shapeColor = "black";
circle1 = createSprite(width/2-140,30,20,20);
circle1.addImage(circleImage);
circle1.scale = 0.01
circle2 = createSprite(width/2-120,30,20,20);
circle2.addImage(circleImage);
circle2.scale = 0.01
circle3 = createSprite(width/2-100,30,20,20);
circle3.addImage(circleImage);
circle3.scale = 0.01
circle4 = createSprite(width/2-80,30,20,20);
circle4.addImage(circleImage);
circle4.scale = 0.01
circle5 = createSprite(width/2-60,30,20,20);
circle5.addImage(circleImage);
circle5.scale = 0.01

circle6 = createSprite(width/2+140,30,20,20);
circle6.addImage(circleImage);
circle6.scale = 0.01
circle7 = createSprite(width/2+120,30,20,20);
circle7.addImage(circleImage);
circle7.scale = 0.01
circle8 = createSprite(width/2+100,30,20,20);
circle8.addImage(circleImage);
circle8.scale = 0.01
circle9 = createSprite(width/2+80,30,20,20);
circle9.addImage(circleImage);
circle9.scale = 0.01
circle10 = createSprite(width/2+60,30,20,20);
circle10.addImage(circleImage);
circle10.scale = 0.01
player2 = createSprite(width/4+600,350,20,60);
player2.shapeColor = "blue";
goalkeeper2 = createSprite(width/4+600,70,20,20);
goalkeeper2.shapeColor = "yellow";
goalkeeper2.velocityX = 5;
goalkeeper2.addImage(goalkeeper1Image);
goalkeeper2.scale = 0.25
football2 = createSprite(width/4+600,300,20,20);
football2.shapeColor = "black";
block3 = createSprite(width/4-125+600,70,20,20);
block3.shapeColor = "orange"
block3.visible = false;
block4 = createSprite(width/4+125+600,70,20,20);
block4.shapeColor = "orange"
block4.visible = false;
}

function draw() {
  background("green");
  goalkeeper();
if(gameState === 1){
  player_1();
  if(change1 === 0 || change1 === 1){
    reset1();
    player_2();
  }
  if(change2 === 0 || change2 === 1){
gameState = 2 
  }
}
  if(gameState === 2){
    reset2();
    player_1();
    if(football1.isTouching(goal1)){
      circle2.scale = 0.05;
      circle2.addImage(greencircleImage);
    }
    else{
      circle2.scale = 0.05;
      circle2.addImage(redcircleImage);
    }
} 



  drawSprites();
}
function reset1(){
football1.x = width/4;
football1.y = 300;
/*goalkeeper1.x = width/4;
goalkeeper1.y= 70;
goalkeeper1.velocityX = 5;*/
player1.x = width/4;
player1.y= 350;
}
function serveball(){
  
    football1.velocityY = -10;
  
}
function reset2(){
  football2.x = width/4+600;
  football2.y = 300;
  /*goalkeeper1.x = width/4;
  goalkeeper1.y= 70;
  goalkeeper1.velocityX = 5;*/
  player2.x = width/4+600;
  player2.y= 350;
}
function goalkeeper (){
  if(goalkeeper1.isTouching(block1)||goalkeeper1.isTouching(block2)){
    goalkeeper1.bounceOff(block1);
    goalkeeper1.bounceOff(block2);
    }
    if(goalkeeper2.isTouching(block3)||goalkeeper2.isTouching(block4)){
      goalkeeper2.bounceOff(block3);
      goalkeeper2.bounceOff(block4);
      }
}
function player_1(){
  if(keyDown(LEFT_ARROW)){
    player1.x = player1.x-20;
    }
    if(keyDown(RIGHT_ARROW)){
      player1.x = player1.x+20;
      }
      if(keyDown(LEFT_ARROW)){
        football1.x = player1.x-5;
        }
        if(keyDown(RIGHT_ARROW)){
          football1.x = player1.x+5;
          }
          if(keyDown(UP_ARROW)){
           serveball();}
           if(football1.isTouching(goal1)){
            football1.velocityY = 0;
            goalkeeper1.velocityX = 0;
             score = score+1;
             circle1.scale = 0.05;
             circle1.addImage(greencircleImage);
             change1 = 1;
           }
           if(football1.isTouching(boundary1)|| football1.isTouching(boundary2)||
  football1.isTouching(boundary3)||football1.isTouching(boundary4)|| 
  football1.isTouching(boundary5)|| football1.isTouching(goalkeeper1)){
  //redcircleImage.scale = 2;
  circle1.scale = 0.02
  circle1.addImage(redcircleImage);
  change1 = 0;
 console.log(redcircleImage)
  }
}
function player_2(){
  if(keyDown(LEFT_ARROW)){
    player2.x = player2.x-20;
    }
    if(keyDown(RIGHT_ARROW)){
      player2.x = player2.x+20;
      }
      if(keyDown(LEFT_ARROW)){
        football2.x = player2.x-5;
        }
        if(keyDown(RIGHT_ARROW)){
          football2.x = player2.x+5;
          }
          if(keyDown(UP_ARROW)){
            football2.velocityY = -10;
          }
           if(football2.isTouching(goal2)){
            football2.velocityY = 0;
            goalkeeper2.velocityX = 0;
             score = score+1;
             circle6.scale = 0.05;
             circle6.addImage(greencircleImage);
             change2 = 1 
           }
           if(football2.isTouching(boundary1)|| football2.isTouching(boundary2)||
  football2.isTouching(boundary3)||football2.isTouching(boundary4)|| 
  football2.isTouching(boundary5)|| football2.isTouching(goalkeeper1)){
  //redcircleImage.scale = 2;
  circle6.scale = 0.02
  circle6.addImage(redcircleImage);
  change2 = 0;
 console.log(redcircleImage)
  }
}
