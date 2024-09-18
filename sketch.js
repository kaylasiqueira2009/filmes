let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de comédia?");
  campoAventura = createCheckbox("Gosta de animação?");
}

function draw() {
  background("pink ");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 15));
  textAlign(CENTER, CENTER);
  textSize(90);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Zootopia";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Procurando Nemo";          
        } else{
         return "Toy Story";
        }
      } else {
        if (gostaDeFantasia) {
          return "Up Altas Aventuras";
        } else {
          return "Divertidamente";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Meu Malvado Favorito 4";
    } else {
      return "Moana";
    }
  }
}
