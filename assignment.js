// function ass1(num) {
//   for (let i = num; i > 0; i = i - 3) {
//     console.log(i);
//   }
// }

// ass1(10);

// function ass2(num1, num2) {
//   for (let i = num2; i <= num1; i = i + 1) {
//     console.log(i);
//   }
// }

// ass2(16, 9);

// function ass3(num1, num2, num3) {
//   let container = [];
//   let count = -1;
//   for (let i = num1; i <= num2; i = i + num3) {
//     count++;
//     container[count] = i;
//   }
//   console.log(container);
// }

// ass3(10, 20, 2);

function isPrime(num) {
  let prime = true;
  for (let i = 2; i < num; i = i + 1) {
    if (num % i > 0) {
      prime;
    } else prime = false;
  }
  return prime;
}

function primeArray(num3, num4) {
  let priArray = [];
  let count = 0;
  for (let i = num3; i <= num4; i++) {
    if (isPrime(i) == true) {
      priArray[count] = i;
      count++;
    }
  }
  return priArray;
}

let ret1 = primeArray(2, 29);
console.log(ret1);
