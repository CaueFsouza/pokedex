window.onload = function () {

let campo = document.getElementById("buscar");
let pokemons = document.querySelectorAll(".pokemon");

campo.addEventListener("keyup", function () {

let texto = campo.value.toLowerCase();

pokemons.forEach(function (pokemon) {

let nome = pokemon.querySelector("h2").textContent.toLowerCase();

if (nome.includes(texto)) {
pokemon.parentElement.style.display = "";
} else {
pokemon.parentElement.style.display = "none";
}

});

});

}