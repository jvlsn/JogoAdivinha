let chutar = document.querySelector("#chutar");
let numeroSecreto = parseInt(Math.random() * 1000);
let contador = 0;

console.log(numeroSecreto);

chutar.addEventListener("click", function (e) {
  e.preventDefault();
  const name = document.querySelector("#name");

  const value = name.value;

  if (value == numeroSecreto) {
    resultado.innerHTML = "Parabens, você acertou!";

    contador++;
    quantidade.innerHTML = `Você chutou ${contador} vezes`;
  } else if (value > numeroSecreto) {
    resultado.innerHTML = "Você errou, o número é menor";
    setTimeout(function () {
      resultado.innerHTML = "";
    }, 2500);
    contador++;
    quantidade.innerHTML = `Você chutou ${contador} vezes`;
  } else if (value < numeroSecreto) {
    resultado.innerHTML = "Você errou, o número é maior";
    setTimeout(function () {
      resultado.innerHTML = "";
    }, 2500);
    contador++;
    quantidade.innerHTML = `Você chutou ${contador} vezes`;
  } else {
    resultado.innerHTML = "Resposta invalida";
    setTimeout(function () {
      resultado.innerHTML = "";
    }, 2500);
  }
});
