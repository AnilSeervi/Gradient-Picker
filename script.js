var body = document.getElementsByTagName("body")[0];
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var clr1 = document.getElementsByTagName("span")[0];
var clr2 = document.getElementsByTagName("span")[1];

function selectColor() {
  body.style.background = `linear-gradient(to right,${color1.value},${color2.value}`;
  clr1.textContent = `${color1.value}`;
  clr2.textContent = `${color2.value}`;
  clr1.style.backgroundColor = `${color1.value}`;
  clr2.style.backgroundColor = `${color2.value}`;
}
color1.addEventListener("input", selectColor);
color2.addEventListener("input", selectColor);
