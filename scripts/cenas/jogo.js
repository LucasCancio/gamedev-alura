import Cenario from "../jogo/cenario.js";
import Personagem from "../jogo/personagem.js";
import Inimigo from "../jogo/inimigo.js";
import Vida from "../jogo/vida.js";
import Pontuacao from "../jogo/pontuacao.js";

class Jogo {
  constructor() {
    this.indice = 0;

    this.mapa = fita.mapa;
  }

  setup(p5) {
    somDoPulo.setVolume(0.02);
    somDoJogo.setVolume(0.15);

    cenario = new Cenario(imagemCenario, 3);
    cenario.setup(p5);

    pontuacao = new Pontuacao();
    vida = new Vida(
      fita.configuracoes.vidaMaxima,
      fita.configuracoes.vidaInicial,
      imagemVida
    );

    personagem = new Personagem(
      matrizPersonagem,
      imagemPersonagem,
      0,
      30,
      110,
      135,
      220,
      270
    );
    personagem.setup(p5);

    const inimigo = new Inimigo(
      matrizInimigo,
      imagemInimigo,
      p5.width - 52,
      30,
      52,
      52,
      104,
      104,
      10
    );
    inimigo.setup(p5);

    const inimigoVoador = new Inimigo(
      matrizInimigoVoador,
      imagemInimigoVoador,
      p5.width - 52,
      200,
      100,
      75,
      200,
      150,
      10
    );
    inimigoVoador.setup(p5);

    const inimigoGrande = new Inimigo(
      matrizInimigoGrande,
      imagemInimigoGrande,
      p5.width,
      0,
      200,
      200,
      400,
      400,
      15
    );
    inimigoGrande.setup(p5);

    inimigos.push(inimigo, inimigoGrande, inimigoVoador);
  }

  keyPressed(key) {
    if (key === "ArrowUp") {
      personagem.pula();
      somDoPulo.play();
    }
  }

  draw(p5) {
    cenario.exibe(p5);
    cenario.move(p5.width);

    vida.draw(p5);

    pontuacao.exibe(p5);
    pontuacao.adicionarPonto();
    personagem.exibe(p5);
    personagem.aplicaGravidade();

    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe(p5);
    inimigo.move();

    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece(p5.width);
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }

    if (personagem.estaColidindo(inimigo, p5)) {
      vida.perdeVida();
      personagem.tornarInvencivel();
      if (vida.vidas === 0) {
        p5.image(imagemGameOver, p5.width / 2 - 200, p5.height / 3);
        p5.noLoop();
      }
    }
  }
}

export default Jogo;
