class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
  }

  setup() {
    somDoPulo.setVolume(0.02);
    gameOverSom.setVolume(0.05);
    somDoJogo.setVolume(0.15);

    cenario = new Cenario(imagemCenario, 5, 0, width, height);
    nuvens = new Cenario(imagemNuvens, 2, 10, width, height / 3);

    pontuacao = new Pontuacao();
    vida = new Vida(
      fita.configuracoes.vidaMaxima,
      fita.configuracoes.vidaInicial
    );

    personagem = new Personagem(
      matrizPersonagem,
      imagemPersonagem,
      0,
      0.13 * height,
      110,
      135,
      220,
      270
    );

    const inimigo = new Inimigo(
      matrizInimigo,
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
      matrizInimigoGrande,
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
      matrizInimigoVoador,
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
  }

  keyPressed(key) {
    if (key === "ArrowUp") {
      personagem.pula(somDoPulo);
      somDoPulo.play();
    }
  }

  draw() {
    nuvens.exibe();
    nuvens.move();

    cenario.exibe();
    cenario.move();

    vida.draw();
    pontuacao.exibe();
    pontuacao.adicionarPonto();

    personagem.exibe();
    personagem.aplicaGravidade();

    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.indice++;
      //inimigo.aparece();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      if (vida.vidas === 0) {
        //this.finalizar();
      }
    }
  }

  finalizar() {
    imagemGameOver.exibe(
      larguraCentro - imagemGameOver.largura / 2,
      alturaCentro - imagemGameOver.altura / 2
    );

    gameOverSom.play();
    somDoJogo.stop();

    noLoop();
  }
}
