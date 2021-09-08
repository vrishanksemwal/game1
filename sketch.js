var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload(){
bgImg = loadImage("assets/bg1.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){
createCanvas(400,400)
//background image
bg = createSprite(50,150,1,1);
bg.addImage(bgImg);
bg.scale = 1
bg.velocityX=-1
//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        if (bg.x<0){
          bg.x=width/2
        }
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY +0.5;
   if (keyDown("right")){
     balloon.x=balloon.x+3
   }

   if(keyDown("left")){
     balloon.x=balloon.x-3
   }

if (balloon.x>500){
  text("and we fly away",100,100)
}
        drawSprites();
        
}