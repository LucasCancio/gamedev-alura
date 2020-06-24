class Animacao {
  constructor(framesPorLinha, qtdeLinhas, imagem, x, largura, altura, larguraSprite, alturaSprite) {
    this.framesPorLinha= framesPorLinha;
    this.totalFrames=qtdeLinhas * framesPorLinha;
    this.imagem = imagem;
    this.x = x;
    this.y = height - altura - 0.13 * height;
    this.largura = largura;
    this.altura = altura;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;

    this.frameAtual = 0;
  }

  exibe() {
    let [xInSprite, yInSprite] = this.pegarCordenadasPeloFrame(this.frameAtual);

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

    if (this.frameAtual >= this.totalFrames - 1) {
      this.frameAtual = 0;
    }
  }

  pegarCordenadasPeloFrame(frame) {
    let linhaDoFrame = Math.floor(frame / this.framesPorLinha);
    let x =
      this.larguraSprite *
      (frame >= this.framesPorLinha ? frame % this.framesPorLinha : frame);

    let y = this.alturaSprite * linhaDoFrame;

    return [x, y];
  }
}
