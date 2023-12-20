let root = document.getElementById(`root`);

const button = document.createElement(`button`);
button.setAttribute("class", "button");
root.appendChild(button);
button.innerText = "Start";

let score = 0;
let scoreP = document.createElement(`p`);
scoreP.innerText = `Score:${score}`;
scoreP.setAttribute("class", "score");
root.appendChild(scoreP);

const container = document.createElement("div");
container.setAttribute("class", "container");

root.appendChild(container);

let box;
let boxes;
let randBox;

for (i = 0; i < 9; i++) {
  box = document.createElement("div");
  box.setAttribute("class", "box");
  container.appendChild(box);
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
      boxes[i].addEventListener("click", refresh);
      boxes[i].style.backgroundColor = randomcolor;
      console.log("else");
    }
  }
  // score = 0;
  // scoreP.innerText = `Score: ${score}`;
}

function refresh() {
  fillColor();
  console.log(randBox);
  if (randBox == 4) {
    score++;
    scoreP.innerText = `Score: ${score}`;
  }
}

function table() {}

button.addEventListener("click", fillColor);
