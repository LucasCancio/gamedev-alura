const puloInicial = 0;

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

    this.qtdePulos = 2;
    this.puloAtual = puloInicial;
  }

  pula() {
    if (this.verificarSeEstaNoChao()) this.puloAtual = puloInicial;

    if (this.puloAtual < this.qtdePulos) {
      this.velocidadeDoPulo = -35;
      this.puloAtual++;
    }
  }

  aplicaGravidade() {
    this.y += this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade;

    if (this.verificarSeEstaNoChao()) {
      this.y = this.yInicial;
    }
  }

  estaColidindo(inimigo) {
    const precisao = 0.7;

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

  verificarSeEstaNoChao() {
    return this.y >= this.yInicial;
  }
}
