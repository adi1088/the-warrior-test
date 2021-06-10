var form , story;
var gameState =0;
var lake, lakeImg;
var player, playerImg;
var stage1, stage2 ,stage3;
var stage1Img, stage2Img, stage3Img;
var introMusic ;


function preload(){
  // backImage=loadImage("jungle.jpg");
  stage1Img=loadImage("images/Stage_1.png");
  stage2Img=loadImage("images/Stage_2.gif");
  stage3Img=loadImage("images/Stage_3.jpg");
  playerImg = loadAnimation("images/sprite_0.png","images/sprite_1.png","images/sprite_2.png")
  introMusic=loadSound("sounds/Intro_Music.mp3");
}

function setup() {
  createCanvas(displayWidth,displayHeight-117)
 game = new Game();
 game.start();
 gameState=0;

}

function draw() { 
  background("black")
 
  if(gameState===1 || gameState===2){
    clear();
    game.play();
    // introMusic.play();
  }
  
  

  drawSprites();
}


 