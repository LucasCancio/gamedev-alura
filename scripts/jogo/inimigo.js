class Inimigo extends Animacao {
  constructor(
    framesPorLinha,
    qtdeLinhas,
    imagem,
    x,
    variacaoY,
    largura,
    altura,
    larguraSprite,
    alturaSprite,
    velocidade,
    delay
  ) {
    super(
      framesPorLinha,
      qtdeLinhas,
      imagem,
      x,
      variacaoY,
      largura,
      altura,
      larguraSprite,
      alturaSprite
    );

    this.velocidade = velocidade;
    this.delay=delay;
    this.x= width + this.delay;
  }

  move() {
    this.x -= this.velocidade;

    const saiuDaTela = this.x < -this.largura - this.delay;
    if (saiuDaTela) {
      this.x = width;
    }
  }
}