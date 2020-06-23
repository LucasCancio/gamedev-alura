class Personagem extends Animacao {
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

    this.yInicial = height - this.altura;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0;
    this.gravidade = 3;
  }

  pula() {
    this.velocidadeDoPulo = -50;
  }

  aplicaGravidade() {
    this.y += this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade;

    const alcancouChao = this.y > this.yInicial;
    if (alcancouChao) {
      this.y = this.yInicial;
    }
  }

  estaColidindo(inimigo) {
    rect(this.x, this.y, this.largura, this.altura);
    rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura);

    const precisao= .7;

    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );

    return colisao;
  }
}
