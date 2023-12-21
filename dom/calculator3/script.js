const curOpElement = document.querySelectorAll("#currentOp");
const prevOpElement = document.querySelectorAll("#currentOp");

const numButtons = document.querySelectorAll("#number");
const operations = document.querySelectorAll("#operations");

const equal = document.querySelector("#equal");

const clear = document.querySelector("#clear");

class container {
  constructor(prevOpElement, curOpElement) {
    this.prevOpElement = prevOp;
    this.curOpElement = curOp;
  }
  appendNumber() {}
  clear() {
    this.prevOp = "";
    this.curOp = "";
    this.operations = undefined;
  }
  chooseOperation() {}
  compute() {}
  updateDisplay() {}
}

Number.foreach((button) => {
  button.addEventListener("click", () => {
    container.appendNumber(button.innertext);
    container.updateDisplay();
  });
});
