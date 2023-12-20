let root = document.getElementById("root");

let boxess = ["", "", "", "", "", "", "", "", ""];

const button = document.createElement("button");
button.setAttribute("class", "button");
root.appendChild(button);
button.innerText = "Start";

const container = document.createElement("div");
container.setAttribute("class", "container");
let box;
let allboxes = boxess.map((a) => {
  box = document.createElement("div");
  box.setAttribute("class", "box");
  root.appendChild(container);
  container.appendChild(box);
});

function startGame(inp) {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const randomcolor = `rgb(${red},${green},${blue})`;
  container.style.backgroundColor = randomcolor;
  randomBoxes = document.getElementsByClassName(`box`);
  let randomBox = randomBoxes[Math.floor(Math.random() * 9)];
  const difColor = `rgb(${red - 20},${green},${blue})`;
  randomBox.style.backgroundColor = difColor;
}

button.addEventListener("click", startGame);
