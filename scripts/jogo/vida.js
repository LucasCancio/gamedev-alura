class Vida {
  constructor(total, inicial, imagemVida) {
    this.total = total;
    this.inicial = inicial;
    this.vidas = this.inicial;

    this.largura = 25;
    this.altura = 25;
    this.xInicial = 20;
    this.y = 20;

    this.imagemVida= imagemVida;
  }

  draw(p5) {
    for (let i = 0; i < this.vidas; i++) {
      const margem = i * 10;
      const posicao = this.xInicial * (i + 1);

      p5.image(this.imagemVida, posicao + margem, this.y, this.largura, this.altura);
    }
  }

  ganhaVida() {
    if (this.vidas <= this.total) {
      this.vidas++;
    }
  }

  perdeVida() {
    this.vidas--;
  }
}

export default Vida;
