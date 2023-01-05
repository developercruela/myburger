let control = document.querySelector(".control");
let cheese = document.querySelector("#cheese");
let meat = document.querySelector("#meat");
let salad = document.querySelector("#salad");
let tomato = document.querySelector("#tomato");
let onion = document.querySelector("#onion");
let pickle = document.querySelector("#pickle");

cheese.addEventListener("click", function () {
  const cheese = document.createElement("img");
  cheese.setAttribute("src", "./burger-layers/cheese.svg");
  control.append(cheese);
});
meat.addEventListener("click", function () {
  const meat = document.createElement("img");
  meat.setAttribute("src", "./burger-layers/meat.svg");
  control.append(meat);
});
salad.addEventListener("click", function () {
  const salad = document.createElement("img");
  salad.setAttribute("src", "./burger-layers/salad.svg");
  control.append(salad);
});
tomato.addEventListener("click", function () {
  const tomato = document.createElement("img");
  tomato.setAttribute("src", "./burger-layers/tomato.svg");
  control.append(tomato);
});
onion.addEventListener("click", function () {
  const onion = document.createElement("img");
  onion.setAttribute("src", "./burger-layers/onion.svg");
  control.append(onion);
});
pickle.addEventListener("click", function () {
  const pickle = document.createElement("img");
  pickle.setAttribute("src", "./burger-layers/pickle.svg");
  control.append(pickle);
});

control.addEventListener("click", function (e) {
  control.removeChild(e.target);
});
