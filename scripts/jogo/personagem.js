const framesPorLinha = 4;
const totalFrames = framesPorLinha * 4;//stylesheet com 4 linhas

class Personagem {
  constructor(imagem, width, height) {
    this.imagem = imagem;
    this.frameAtual = 0;
    this.widthNaSprite = 220;
    this.heightNaSprite = 270;

    this.width = width;
    this.height = height;
  }

  exibe() {
    let xInCanvas = 0;
    let yInCanvas = height - this.height;
    let [xInSprite, yInSprite] = this.pegarCordenadasEmFrame(this.frameAtual);

    image(
      this.imagem,
      xInCanvas,
      yInCanvas,
      this.width,
      this.height,
      xInSprite,
      yInSprite,
      this.widthNaSprite,
      this.heightNaSprite
    );

    this.anima();
  }

  pegarCordenadasEmFrame(frame) {
    let linhaDoFrame = Math.floor(frame / framesPorLinha);
    let x =
      this.widthNaSprite *
      (frame >= framesPorLinha ? frame % framesPorLinha : frame);

    let y = this.heightNaSprite * linhaDoFrame;

    return [x, y];
  }

  anima() {
    this.frameAtual++;

    if (this.frameAtual >= totalFrames - 1) {
      this.frameAtual = 0;
    }
  }
}
