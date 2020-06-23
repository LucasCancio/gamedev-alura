class Personagem {
  constructor(imagem) {
    this.imagem = imagem;
    this.matriz = [
      [0, 0],
      [220, 0],
      [440, 0],
      [660, 0],
      [0, 270],
      [220, 270],
      [440, 270],
      [660, 270],
      [0, 540],
      [220, 540],
      [440, 540],
      [660, 540],
      [0, 810],
      [220, 810],
      [440, 810],
      [660, 810],
    ];
    this.frameAtual = 0;
  }

  exibe() {
    let playerWidth = 110;
    let playerHeight = 135;
    let xInCanvas = 0;
    let yInCanvas = height - playerHeight;
    let xInSprite = this.matriz[this.frameAtual][0];
    let yInSprite = this.matriz[this.frameAtual][1];
    let widthInSprite = 220;
    let heightInSprite = 270;

    image(
      this.imagem,
      xInCanvas,
      yInCanvas,
      playerWidth,
      playerHeight,
      xInSprite,
      yInSprite,
      widthInSprite,
      heightInSprite
    );

    this.anima();
  }

  anima() {
    this.frameAtual++;

    if (this.frameAtual >= this.matriz.length - 1) {
      this.frameAtual = 0;
    }
  }
}
