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

  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  imagemVida = loadImage('imagens/assets/heart.png');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');

  gameOverSom = loadSound("./sons/gameover-sound.mp3");

  fita = loadJSON('fita/fita.json')
}