class Imagem {
  constructor(imagem, largura, altura) {
    this.imagem = loadImage(imagem);
    this.largura = largura;
    this.altura = altura;
  }

  exibe(x, y) {
    image(this.imagem, x, y, this.largura, this.altura);
  }
}

export default Imagem;