class Cenario {
  constructor(imagem, velocidade) {
    this.imagem = imagem;
    this.velocidade = velocidade;
    
  }

  setup(p5){
    this.x1 = 0;
    this.x2 = p5.width;
  }

  exibe(p5) {
    p5.image(this.imagem, this.x1, 0, p5.width, p5.height);
    p5.image(this.imagem, this.x2, 0, p5.width, p5.height);
  }

  move(width) {
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

export default Cenario;
