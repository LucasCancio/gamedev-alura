class Inimigo extends Animacao {
  constructor(
    framesPorLinha,
    qtdeLinhas,
    imagem,
    x,
    largura,
    altura,
    larguraSprite,
    alturaSprite
  ) {
    super(
      framesPorLinha,
      qtdeLinhas,
      imagem,
      x,
      largura,
      altura,
      larguraSprite,
      alturaSprite
    );

    this.velocidade = 10;
  }

  move() {
    this.x -= this.velocidade;

    const saiuDaTela = this.x < -this.largura;
    if (saiuDaTela) {
      this.x = width;
    }
  }
}