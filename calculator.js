function calculate(num1, num2, operation) {
  let answer;
  if (operation == "+") {
    answer = num1 + num2;
  } else if (operation == "-") {
    answer = num1 - num2;
  } else if (operation == "*") {
    answer = num1 * num2;
  } else if (operation == "/") {
    answer = num1 / num2;
  } else if (operation == "%") {
    answer = num1 * (num2 / 100);
  } else return "Error";
  return answer;
}

let finalAnswer = calculate(100, 50, "%");
console.log("Answer:", finalAnswer);
