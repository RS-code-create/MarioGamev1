var bg,bgImg;

function preload(){
  bgImg = loadImage("assets/bg.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/3+200,displayHeight/3+95,40,40)
bg.addImage(bgImg)
bg.scale = 1.6
}

function draw() {
  background(0); 
  drawSprites();
}