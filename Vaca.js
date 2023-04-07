//1535 760

//variaveis vaca
let xVaca = 700;
let yVaca = 705;
let widthVaca = 40;
let heightVaca = 40;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemAutor, xVaca, yVaca, widthVaca, heightVaca);
}

function movimentaVaca() {
  if (keyIsDown(UP_ARROW)) {
    yVaca -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeMoverBaixo()) {
      yVaca += 5;
    }
  }
  if (keyIsDown(LEFT_ARROW)) {
    if (podeMoverEsq()) {
      xVaca -= 5;
    }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    if (podeMoverDir()) {
      xVaca += 5;
    }
  }
}

function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      comprimentoCarro,
      alturaCarro,
      xVaca,
      yVaca,
      15
    );
    if (colisao) {
      voltaVaca();
      somColisao.play();
      if (pontosMaiorZero()) {
        meusPontos -= 1;
      }
    }
  }
}

function voltaVaca() {
  yVaca = 705;
}

function incluiPontos() {
  textAlign(CENTER);
  textSize(45);
  fill(color(139, 0, 139));
  text(meusPontos, 40, 50);
}

function marcaPonto() {
  if (yVaca < 15) {
    meusPontos += 1;
    voltaVaca();
    somPontos.play();
  }
}

function pontosMaiorZero() {
  return meusPontos > 0;
}

function podeMoverBaixo() {
  return yVaca < 705;
}

function podeMoverEsq() {
  return xVaca > 0;
}

function podeMoverDir() {
  return xVaca < 1490;
}

function aumentaVelocidade() {
  if ((marcaPonto())) {
    for (let i = 0; i < aumentaVelocidade.length; i++) {
      velocidadeCarros[i] *= 22;
    }
  }
}
