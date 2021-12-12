const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "f"];
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  let hexColor = "#";
  let view = document.querySelector(".hex_value");
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  view.innerHTML = hexColor;
  document.body.style.backgroundColor = hexColor;
  view.style.color = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
