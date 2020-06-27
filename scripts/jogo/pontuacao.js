class Pontuacao {
  constructor() {
    this.pontos = 0
  }
  
  exibe(p5) {
    p5.textAlign(p5.RIGHT)
    p5.fill('#fff')
    p5.textSize(50)
    p5.text(parseInt(this.pontos), p5.width - 30, 50)
  }
  
  adicionarPonto() {
    this.pontos = this.pontos + 0.2
  }
}

export default Pontuacao;