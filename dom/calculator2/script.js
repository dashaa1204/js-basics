let characters = [
  "C",
  "+/-",
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];
function createTag(tagName, tagClass) {
  const tag = document.createElement(`${tagName}`);
  tag.setAttribute("class", `${tagClass}`);
  return tag;
}
const root = document.getElementById("root");

const container = createTag("div", "container");
const outDisp = createTag("div", "outDisp");
const display = createTag("div", "display");
const numPad = createTag("div", "numPad");
const prevData = createTag("div", "prevData");
const secData = createTag("div", "secData");
root.appendChild(container);
container.appendChild(outDisp);
outDisp.appendChild(display);
container.appendChild(numPad);
let num;
let collector = "";

for (let i = 0; i < characters.length; i++) {
  num = createTag("div", "num");
  num.setAttribute("id", `${i}`);
  numPad.appendChild(num);
  num.innerText = characters[i];
  num.addEventListener("click", addnum);
  function addnum() {
    document.querySelector(".display").innerText += characters[i];
  }
}

let nums = document.getElementsByClassName("num");

nums[16].setAttribute("class", "num0");

let clearButton = document.getElementById("0");
clearButton.addEventListener("click", clear);

console.log(clearButton);

let = answer;

function clear() {
  display.innerText = "";
}

function sub(a, b) {
  answer = a - b;
}

function apend(a, b) {
  answer = a + b;
}

function mult(a, b) {
  answer = a * b;
}

function divide(a, b) {
  answer = a / b;
}

// console.log(collector);

// <!-- <div class="container">
// <div>
//   <div class="display"></div>
// </div>
// <div class="numPad">
//   <div class="num">c</div>
//   <div class="num">+/-</div>
//   <div class="num">%</div>
//   <div class="num">/</div>
//   <div class="num">7</div>
//   <div class="num">8</div>
//   <div class="num">9</div>
//   <div class="num">*</div>
//   <div class="num">4</div>
//   <div class="num">5</div>
//   <div class="num">6</div>
//   <div class="num">-</div>
//   <div class="num">1</div>
//   <div class="num">2</div>
//   <div class="num">3</div>
//   <div class="num">+</div>
//   <div class="num0">0</div>
//   <div class="num">.</div>
//   <div class="num">=</div>
// </div>
// </div> -->
