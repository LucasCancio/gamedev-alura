import TelaInicial from "./cenas/telaInicial.js";
import Jogo from "./cenas/jogo.js";
import BotaoGerenciador from "./cenas/botaoGerenciador.js";
import load from "./load.js";

new p5((p5) => {
  p5.preload = () => load(p5);

  p5.setup = function () {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.frameRate(40);

    somDoJogo.loop();
    jogo = new Jogo();
    botaoGerenciador = new BotaoGerenciador(
      "Iniciar",
      p5.width / 2,
      p5.height / 2,
      p5
    );
    telaInicial = new TelaInicial(
      imagemTelaInicial,
      botaoGerenciador,
      fonteTelaInicial
    );

    jogo.setup(p5);

    cenas = {
      jogo,
      telaInicial,
    };
  };

  p5.keyPressed = function (event) {
    jogo.keyPressed(event.key);
  };

  p5.draw = function () {
    cenas[cenaAtual].draw(p5);
  };
});
