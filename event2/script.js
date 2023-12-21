let root = document.getElementById(`root`);

const header = document.createElement(`div`);
header.setAttribute("class", "header");
root.appendChild(header);
const button = document.createElement(`button`);
button.setAttribute("class", "button");
header.appendChild(button);
button.innerText = "Start";
let score = 0;
let scoreP = document.createElement(`p`);
scoreP.innerText = `Score:${score}`;
scoreP.setAttribute("class", "score");
header.appendChild(scoreP);
const container = document.createElement("div");
container.setAttribute("class", "container");
root.appendChild(container);

let box;
let boxes;
let randBox;

function grid() {
  for (i = 0; i < 9; i++) {
    box = document.createElement("div");
    box.setAttribute("class", "box");
    container.appendChild(box);
  }
}

function fillColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const randomcolor = `rgb(${red},${green},${blue})`;
  const difColor = `rgb(${red - 20},${green},${blue})`;
  boxes = document.getElementsByClassName("box");

  randBox = Math.floor(Math.random() * 9);

  for (let i = 0; i < 9; i++) {
    if (i == randBox) {
      boxes[i].addEventListener("click", refresh);
      boxes[i].style.backgroundColor = difColor;
    } else {
      boxes[i].addEventListener("click", fillColor);
      boxes[i].style.backgroundColor = randomcolor;
    }
  }
}

function restart() {
  score = 0;
  scoreP.innerText = `Score: ${score}`;

  container.innerHTML = "";
  grid();
  fillColor();
}

function refresh() {
  container.innerHTML = "";
  grid();
  fillColor();
  score++;
  scoreP.innerText = `Score: ${score}`;
}

button.addEventListener("click", restart);
