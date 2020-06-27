class BotaoGerenciador {
  constructor(texto, x, y,p5) {
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.botao = p5.createButton(this.texto);
    this.botao.mousePressed(() => this._alteraCena());
    this.botao.addClass("botao-tela-inicial");
  }

  draw() {
    this.botao.position(this.x, this.y);
    this.botao.center("horizontal");
  }

  _alteraCena() {
    this.botao.remove();
    cenaAtual = "jogo";
  }
}

export default BotaoGerenciador;
