//lista
let yCarros = [90, 200, 300, 420, 520, 620];
let velocidadeCarros = [6, 6.6, 7.5, 6.2, 8, 9];
let xCarros = [1500, 1500, 1500, 1500, 1500, 1500];
let comprimentoCarro = 50;
let alturaCarro = 40;
function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
  }
}

function movimentaCarro() {
  for (let i = 0; i < xCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicao() {
  for (let i = 0; i < xCarros.length; i++) {
    if (xCarros[i] <= -50) {
      xCarros[i] = 1550;
    }
  }
}
