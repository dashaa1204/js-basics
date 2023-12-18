function add() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let sum = num1 + num2;

  document.getElementById("answer").innerText = sum;
}
function subtrac() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let sum = num1 - num2;

  document.getElementById("answer").innerText = sum;
}
function multiply() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let sum = num1 * num2;

  document.getElementById("answer").innerText = sum;
}

function clear() {
  document.getElementById("num1").innerText = ;
}
function divide() {}

let random = Math.floor(Math.random() * 100 + 1);

console.log(random);
