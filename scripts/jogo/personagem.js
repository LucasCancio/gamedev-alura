const puloInicial = 0;

class Personagem extends Animacao {
  constructor(
    matriz,
    imagem,
    x,
    variacaoY,
    largura,
    altura,
    larguraSprite,
    alturaSprite
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

    console.log(height);
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0;
    this.gravidade = 6;

    this.qtdePulos = 2;
    this.puloAtual = puloInicial;
    this.alturaDoPulo = -50;
  }

  pula(somDoPulo) {
    if (this.verificarSeEstaNoChao()) this.puloAtual = puloInicial;

    if (this.puloAtual < this.qtdePulos) {
      somDoPulo.play();
      this.velocidadeDoPulo = this.alturaDoPulo;
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
    const precisao = 0.88;
    const colisao = collideCircleCircle(
      this.x + this.largura / 2,
      this.y + this.altura / 2,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x + inimigo.largura / 2,
      inimigo.y + inimigo.altura / 2,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );

    return colisao;
  }

  verificarSeEstaNoChao() {
    return this.y >= this.yInicial;
  }
}
