function load(p5) {
  imagemCenario = p5.loadImage("../assets/images/cenarios/floresta.png");
  imagemGameOver = p5.loadImage("../assets/images/game-over.png");
  imagemPersonagem = p5.loadImage(
    "../assets/images/entidades/personagem/correndo.png"
  );
  imagemInimigo = p5.loadImage("../assets/images/entidades/inimigos/gotinha.png");
  imagemInimigoVoador = p5.loadImage(
    "../assets/images/entidades/inimigos/gotinha-voadora.png"
  );
  imagemInimigoGrande = p5.loadImage(
    "../assets/images/entidades/inimigos/troll.png"
  );
  imagemTelaInicial = p5.loadImage("../assets/images/cenarios/menu.png");
  imagemVida = p5.loadImage("../assets/images/itens/heart.png");

  fonteTelaInicial = p5.loadFont("../assets/fonts/fonteTelaInicial.otf");

  somDoJogo = p5.loadSound("../assets/sounds/trilha_jogo.mp3");
  somDoPulo = p5.loadSound("../assets/sounds/somPulo.mp3");

  fita = p5.loadJSON("../config/config.json");
}

export default load;
