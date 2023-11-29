// function findY(x) {
//   let y;
//   {
//     return (y = 3 * x - 5);
//   }
// }

// let result = findY(1);
// console.log("Answer:", result);

// function findY(x) {
//   let y;
//   {
//     return (y = 4 * (x * x) - 3 * x + 5);
//   }
// }

// let result = findY(-2);
// console.log("Answer:", result);

// function findLastNum(num) {
//   let lastnum;
//   {
//     return (lastnum = num % 10);
//   }
// }

// let answer = findLastNum(476);
// console.log("Answer:", answer);

// function findSecondNum(num) {
//   let secondNum;
//   {
//     return (secondNum = ((num % 100) - (num % 10)) / 10);
//   }
// }

// let result = findSecondNum(423);
// console.log(result);

// function digitMulti(num) {
//   return ((num % 10) * (num - (num % 10))) / 10;
// }

// let Answer = digitMulti(27);
// console.log("Answer:", Answer);

// function digitSum(num) {
//   let last = num % 10;
//   let second = ((num - (num % 10)) / 10) % 10;
//   let first = (num - (num % 100)) / 100;
//   return last + second + first;
// }

// let Answer = digitSum(123);
// console.log(Answer);

function findMin(num) {
  min = (num - num / ) / 60;
  console.log(min);
}

let Answer = findMin(300);
console.log("Answer:", Answer);


function login(user, pass) {
    if(user=="dashaa" && pass=="123123") return "true"
    else return "false"
}

let answer = login("dashaa", "123123")
console.log(answer)