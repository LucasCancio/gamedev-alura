let imagemCenario;
let imagemPersonagem;
let imagemInimigo;

let somDoPulo;

let cenario;
let somDoJogo;
let personagem;
let inimigo;

const fps = 40;

function preload() {
  imagemCenario = loadImage("./imagens/cenario/floresta.png");
  imagemPersonagem = loadImage("./imagens/personagem/correndo.png");
  imagemInimigo = loadImage("./imagens/inimigos/gotinha.png");
  somDoJogo = loadSound("./sons/trilha_jogo.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  somDoJogo.setVolume(0.1);
  somDoJogo.loop();
  personagem = new Personagem(4, 4, imagemPersonagem, 0, 110, 135, 220, 270);

  inimigo = new Inimigo(4, 7, imagemInimigo, width - 50, 52, 52, 104, 104);
  frameRate(fps);
}

function keyPressed(){
  if(key==='ArrowUp'){
    personagem.pula()
    somDoPulo.play();
  }
}

function draw() {
  //while (true)
  cenario.exibe();
  cenario.move();

  personagem.exibe();
  personagem.aplicaGravidade();

  inimigo.exibe();
  inimigo.move();

  if(personagem.estaColidindo(inimigo)){
    console.log('Colidiu')
    noLoop();
  }
}
