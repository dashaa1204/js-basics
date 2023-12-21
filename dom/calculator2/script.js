let characters = [
  "c",
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
display.appendChild(prevData);
display.appendChild(secData);
let num;
let collector = "";

const currentOperandElement = document.querySelector("[secData]");
const prevOperandElement = document.querySelector("[prevData]");

for (let i = 0; i < characters.length; i++) {
  num = createTag("div", "num");
  numPad.appendChild(num);
  num.innerText = characters[i];
  num.addEventListener("click", console.log);
}

function displayCol() {
  let bill = Number(document.getele);
}

let nums = document.getElementsByClassName("num");

nums[16].setAttribute("class", "num0");
nums[10].setAttribute("class", "numbers");

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
