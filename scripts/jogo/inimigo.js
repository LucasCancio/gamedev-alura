import Animacao from "./animacao.js";

class Inimigo extends Animacao {
  constructor(
    matriz,
    imagem,
    x,
    variacaoY,
    largura,
    altura,
    larguraSprite,
    alturaSprite,
    velocidade
  ) {
    super(
      matriz,
      imagem,
      x,
      variacaoY,
      largura,
      altura,
      larguraSprite,
      alturaSprite
    );

    this.velocidade = velocidade;
  }

  move() {
    this.x = this.x - this.velocidade;
  }

  aparece(width) {
    this.x = width;
  }
}

export default Inimigo;
