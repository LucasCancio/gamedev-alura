class Animacao {
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
    this.matriz = matriz;
    this.imagem = imagem;
    this.x = x;
    this.variacaoY = variacaoY;
    this.y = height - altura - variacaoY;
    this.largura = largura;
    this.altura = altura;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;

    this.frameAtual = 0;
  }

  exibe() {
    console.log(this.frameAtual);
    let xInSprite = this.matriz[this.frameAtual][0];
    let yInSprite = this.matriz[this.frameAtual][1];

    image(
      this.imagem,
      this.x,
      this.y,
      this.largura,
      this.altura,
      xInSprite,
      yInSprite,
      this.larguraSprite,
      this.alturaSprite
    );

    this.anima();
  }

  anima() {
    this.frameAtual++;

    if (this.frameAtual >=  this.matriz.length - 1) {
      this.frameAtual = 0;
    }
  }

  /* pegarCordenadasPeloFrame(frame) {
    let linhaDoFrame = Math.floor(frame / this.framesPorLinha);
    let x =
      this.larguraSprite *
      (frame >= this.framesPorLinha ? frame % this.framesPorLinha : frame);

    let y = this.alturaSprite * linhaDoFrame;

    return [x, y];
  } */
}
