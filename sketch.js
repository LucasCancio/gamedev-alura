let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemGameOver;
let imagemNuvens;

let somDoPulo;
let gameOverSom;

let cenario;
let nuvens;
let somDoJogo;
let personagem;
let inimigo;

const fps = 40;

let larguraCentro;
let alturaCentro;

function preload() {
  imagemCenario = loadImage("./imagens/cenario/mario-background.jpg");
  imagemPersonagem = loadImage("./imagens/personagem/correndo.png");
  imagemInimigo = loadImage("./imagens/inimigos/gotinha.png");
  somDoJogo = loadSound("./sons/supermario-trilha.mp3");
  somDoPulo = loadSound("./sons/jump.mp3");
  imagemGameOver = new Imagem("./imagens/assets/game-over.png", 412, 78);
  imagemNuvens = loadImage("./imagens/cenario/nuvens.png");

  gameOverSom = loadSound("./sons/gameover-sound.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 5, 0, width, height);
  nuvens = new Cenario(imagemNuvens, 2, 10, width, height / 3);

  somDoPulo.setVolume(0.02);
  gameOverSom.setVolume(0.05);
  somDoJogo.setVolume(0.15);
  //somDoJogo.loop();
  personagem = new Personagem(4, 4, imagemPersonagem, 0, 110, 135, 220, 270);

  inimigo = new Inimigo(4, 7, imagemInimigo, width - 52, 52, 52, 104, 104);

  let matriz = [];
  for (let index = 0; index <= 4 * 7; index++) {
    matriz.push(inimigo.pegarCordenadasPeloFrame(index));
  }
  console.table(matriz);

  frameRate(fps);

  larguraCentro = width / 2;
  alturaCentro = height / 2;
}

function keyPressed() {
  if (key === "ArrowUp") {
    personagem.pula(somDoPulo);
  }
}

function draw() {
  //while (true)
  cenario.exibe();
  cenario.move();

  nuvens.exibe();
  nuvens.move();

  personagem.exibe();
  personagem.aplicaGravidade();

  inimigo.exibe();
  //inimigo.move();

  if (personagem.estaColidindo(inimigo)) {
    finalizarJogo();
  }
}

function finalizarJogo() {
  imagemGameOver.exibe(
    larguraCentro - imagemGameOver.largura / 2,
    alturaCentro - imagemGameOver.altura / 2
  );

  gameOverSom.play();
  somDoJogo.stop();

  noLoop();
}
