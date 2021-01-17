var goal,goal1,goal2;
var boundary1,boundary2,boundary3,boundary4;
var player1 ;
var goalkeeper1;
var football1;
function setup() {
createCanvas(displayWidth,displayHeight);
goal1 = createSprite(width/4,30,200,50);
goal1.shapeColor="red";
goal2 =createSprite(900,30,200,50)
goal2.shapeColor = "red";
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
block2 = createSprite(width/4+125,70,20,20);
block2.shapeColor = "orange"
player1 = createSprite(width/4,350,20,60);
player1.shapeColor = "blue";
goalkeeper1 = createSprite(width/4,70,20,20);
goalkeeper1.shapeColor = "yellow";
goalkeeper1.velocityX = 5;
football1 = createSprite(width/4,300,20,20);
football1.shapeColor = "black";
}

function draw() {
  background("green");
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
          football1.velocityY = -10;
  }
  if(goalkeeper1.isTouching(block1)||goalkeeper1.isTouching(block2)){
  goalkeeper1.bounceOff(block1);
  goalkeeper1.bounceOff(block2);
  }
  if(football1.isTouching(goal1)){
   football1.velocityY = 0;
   goalkeeper1.velocityX = 0;
    }
  drawSprites();
}
