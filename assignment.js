function ass1(num) {
  for (let i = num; i > 0; i = i - 3) {
    console.log(i);
  }
}

ass1(10);

function ass2(num1, num2) {
  for (let i = num2; i <= num1; i = i + 1) {
    console.log(i);
  }
}

ass2(16, 9);

function ass3(num1, num2, num3) {
  let container = [];
  let count = -1;
  for (let i = num1; i <= num2; i = i + num3) {
    count++;
    container[count] = i;
  }
  console.log(container);
}

ass3(10, 20, 2);
