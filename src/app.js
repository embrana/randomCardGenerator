/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let simbols = [1, 2, 3, 4];
let img = ["♦", "♥", "♠", "♣"];

function fNumbers(a) {
  console.log(a);
}

function fSimbols(a) {
  console.log(a);
}

function variables(a, b) {
  let randomNumber = a[Math.floor(Math.random() * a.length)];
  let randomSymbol = b[Math.floor(Math.random() * b.length)];
  return {
    number: randomNumber,
    symbol: randomSymbol
  };
}

let resultado = variables(numbers, simbols);
console.log(resultado);

function render(vars) {
  document.querySelector("#widget_content").innerHTML = `
    <div class="card"> 
      <div class="simbol">${img[vars.symbol]}</div>
      <div class="number">${vars.number}</div>
      <div class="simbol">${img[vars.symbol]}</div>
    </div>
  `;
}
window.onload = function() {
  render(resultado);
};
