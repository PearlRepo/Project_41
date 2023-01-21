var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player1_img, player2_img;
var player1score =0;
var player2score =0;
var waitM, playM, dropS, cheerS, failS;
var obstacleGroup,obstacle,obstacle_img;

function preload(){
  back_img = loadImage("./images/jungle.jpg");
  player1_img = loadImage("./images/basket1.png");
  player2_img = loadImage("./images/basket2.png");
  fruit1_img = loadImage("./images/apple2.png");
  fruit2_img = loadImage("./images/banana2.png");
  fruit3_img = loadImage("./images/melon2.png");
  fruit4_img = loadImage("./images/orange2.png");
  fruit5_img = loadImage("./images/pineapple2.png");
  fruitGroup = new Group();
  obstacle_img = loadImage("images/rock.png");
  obstacleGroup = new Group();

  waitM=loadSound("./sounds/wait.mp3");
  playM=loadSound("./sounds/play.mp3");
  dropS=loadSound("./sounds/drop.mp3");
  cheerS=loadSound("./sounds/cheer.mp3");
  failS= loadSound("./sounds/fail.mp3");
}
function setup() {
  createCanvas(windowWidth-25, windowHeight-28);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     //clear(); 
     game.play();
   }
   if (gameState === 2) {
     game.end();
   }
   if (gameState === 3) {
    game.over();
  }
}