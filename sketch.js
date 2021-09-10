var starImg,bgImg;
var star, starBody;
//criar variável para sprite de fada e imgFada
var fada, fadaImg;
var starNight, music;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    //carregar animação de fada 
    fadaImg = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");
    starNight = loadImage("images/starNight.png");
    music = loadSound("sound/JoyMusic.mp3");
}

function setup() {
    createCanvas(800, 750);


    //escrever código para tocar o som vozFada

    //criar sprite de fada e adicionar animação para fada
    fada = createSprite(200,580,50,50);
    fada.addAnimation("fada", fadaImg);
    fada.scale = 0.2;


    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);


    music.play();

}
function draw() {
    background(starNight);
   
    star.x = starBody.position.x;
    star.y = starBody.position.y;

    if (keyDown("left_arrow")) {
       fada.x = fada.x - 4
         
       }
   
       if (keyDown("right_arrow")) {
       fada.x = fada.x + 4
        
      }
 
      if (keyDown("down_arrow")){
        Matter.Body.setStatic(starBody,false);

      }

      if (star.y > 530 && starBody.position.y > 530){ 
        Matter.Body.setStatic(starBody,true);

       }

    

    drawSprites();
}
