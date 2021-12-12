//==> INDENTAÇÃO DO CÓDIGO (FUNCTIONs, IFs, FORs) E ESPAÇAMENTO ENTRE LINHAS
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload(){
    trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png")
}

function setup() {
    createCanvas(600,200);
    
    //cria sprite trex
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;
    
    //cria sprite do chão
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;
    
    //==> cria o chão invisível
    invisibleGround = createSprite(200,190,400,10);
    invisibleGround.visible = false;                //==> Instrução para deixar sprite invisível     
}

function draw() {
    //definir cor de fundo
    background(220);
      
    //==> pular se barra de espaço pressionada E Trex próximo ao chão
    if(keyDown("space") && trex.y >= 100) {
        trex.velocityY = -10;
        console.log ("Saltou!! Posição Y do Trex = " + trex.y);
    }

    //acrescenta gravidade
    trex.velocityY = trex.velocityY + 0.8
    
    if (ground.x < 0){
        ground.x = ground.width/2;
    }
    
    //==> Trex junto ao chão invisível
    trex.collide(invisibleGround);
    
    drawSprites();
}