let theNumber = Math.floor(Math.random() * 100 + 1);
console.log(theNumber);

function check() {
  let num1 = Number(document.getElementById("num1").value);
  if (num1 == theNumber) {
    document.getElementById("answer").innerText = "congrats";
  } else if (num1 > theNumber) {
    document.getElementById("answer").innerText = "too high";
  } else if (num1 < theNumber) {
    document.getElementById("answer").innerText = "too low";
  }
}

function reset() {
  Number((document.getElementById("num1").value = ""));
  let theNumber = Math.floor(Math.random() * 100 + 1);
}
