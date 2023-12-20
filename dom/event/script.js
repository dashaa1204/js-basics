let boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let root = document.getElementById("root");

const button = document.createElement("button");
root.appendChild(button);
button.innerText = "Start";

button.addEventListener("click", startGame);

const container = document.createElement("div");
container.setAttribute("class", "container");

let box;
let allboxes = boxes.map((a) => {
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
  box.style.backgroundColor = randomcolor;
}
