let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imagemGameOver;
let imagemNuvens;

let somDoPulo;
let gameOverSom;

let cenario;
let nuvens;
let somDoJogo;
let personagem;
let inimigo;
let inimigoGrande;
let inimigoVoador;
let pontuacao;

const inimigos = [];

const fps = 40;

let larguraCentro;
let alturaCentro;

function preload() {
  imagemCenario = loadImage("./imagens/cenario/mario-background.jpg");
  imagemPersonagem = loadImage("./imagens/personagem/correndo.png");
  imagemInimigo = loadImage("./imagens/inimigos/gotinha.png");
  inimigoVoador = loadImage("./imagens/inimigos/gotinha-voadora.png");
  imagemInimigoGrande = loadImage("./imagens/inimigos/troll.png");

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
  personagem = new Personagem(
    4,
    4,
    imagemPersonagem,
    0,
    0.13 * height,
    110,
    135,
    220,
    270
  );

  const inimigo = new Inimigo(
    4,
    7,
    imagemInimigo,
    width - 52,
    0.13 * height,
    52,
    52,
    104,
    104,
    10,
    100
  );

  const inimigoGrande = new Inimigo(
    5,
    6,
    imagemInimigoGrande,
    width - 52,
    0.13 * height,
    200,
    200,
    400,
    400,
    10,
    1500
  );

  const inimigoVoador = new Inimigo(
    3,
    6,
    imagemInimigoVoador,
    width - 52,
    0.13 * height,
    75,
    200,
    150,
    10,
    2500
  );

  inimigos.push(inimigo, inimigoGrande, inimigoVoador);

  frameRate(fps);

  larguraCentro = width / 2;
  alturaCentro = height / 2;

  pontuacao = new Pontuacao();
}

function keyPressed() {
  if (key === "ArrowUp") {
    personagem.pula(somDoPulo);
  }
}

//Essa função é funciona como um while true
function draw() {
  cenario.exibe();
  cenario.move();

  pontuacao.exibe();
  
  nuvens.exibe();
  nuvens.move();

  personagem.exibe();
  personagem.aplicaGravidade();

  inimigo.exibe();
  inimigo.move();

  inimigos.forEach((inimigo) => {
    inimigo.exibe();
    inimigo.move();

    if (personagem.estaColidindo(inimigo)) {
      finalizarJogo();
    }
  });
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
