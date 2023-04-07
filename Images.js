let imagemEstrada;
let imagemAutor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;
let imagemCarros;

//sons
let somColisao;
let somPontos;

function preload() {
  imagemEstrada = loadImage("Images/estrada.png");
  imagemAutor = loadImage("Images/ator-1.png");
  imagemCarro = loadImage("Images/carro-1.png");
  imagemCarro2 = loadImage("Images/carro-2.png");
  imagemCarro3 = loadImage("Images/carro-3.png");
  imagemCarro4 = loadImage("Images/carro-1.png");
  imagemCarro5 = loadImage("Images/carro-2.png");
  imagemCarro6 = loadImage("Images/carro-3.png");

  imagemCarros = [
    imagemCarro,
    imagemCarro2,
    imagemCarro3,
    imagemCarro4,
    imagemCarro5,
    imagemCarro6,
  ];

  somColisao = loadSound("Sons/colidiu.mp3");
  somPontos = loadSound("Sons/pontos.wav");
}
