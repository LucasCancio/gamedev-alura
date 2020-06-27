class TelaInicial {
  constructor(imagemFundo,botao, fonte) {
    this.botao = botao;
    this.fonte = fonte;
    this.imagemFundo = imagemFundo;
  }

  draw(p5) {
    this._imagemDeFundo(p5);
    this._texto(p5);
    this._botao(p5);
  }

  _imagemDeFundo(p5) {
    p5.image(this.imagemFundo, 0, 0, p5.width, p5.height);
  }

  _texto(p5) {
    p5.textFont(this.fonte);
    p5.textAlign(p5.CENTER);
    p5.textSize(50);
    p5.text("As aventuras de", p5.width / 2, p5.height / 3);
    p5.textSize(150);
    p5.text("Hipsta", p5.width / 2, (p5.height / 5) * 3);
  }

  _botao(p5) {
    this.botao.y = (p5.height / 7) * 5;
    this.botao.draw();
  }
}

export default TelaInicial;
