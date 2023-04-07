function setup() {
  createCanvas(1535, 760);
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaVaca();
  voltaPosicao();
  verificaColisao();
  incluiPontos();
  marcaPonto();
  aumentaVelocidade();
}
