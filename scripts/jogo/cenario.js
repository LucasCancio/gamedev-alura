class Cenario {
  constructor(imagem, velocidade, y, largura, altura) {
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.x1 = 0;
    this.x2 = width;
    this.y=y;
    this.largura = largura;
    this.altura = altura;
  }

  exibe() {
    image(this.imagem, this.x1, this.y, this.largura, this.altura);
    image(this.imagem, this.x2, this.y,  this.largura, this.altura);
  }

  move() {
    this.x1 = this.x1 - this.velocidade;
    this.x2 = this.x2 - this.velocidade;

    if (this.x1 < -width) {
      this.x1 = width;
    }
    if (this.x2 < -width) {
      this.x2 = width;
    }
  }
}
