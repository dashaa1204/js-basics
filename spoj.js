// function RGB7005(x) {
//   let y;
//   {
//     return (y = 3 * x - 5);
//   }
// }

// let result = RGB7005(1);
// console.log("Answer:", result);

// function RGB7006(x) {
//   let y;
//   {
//     return (y = 4 * (x * x) - 3 * x + 5);
//   }
// }

// let result = RGB7006(-2);
// console.log("Answer:", result);

// function RGB7007(num) {
//   let lastnum;
//   {
//     return (lastnum = num % 10);
//   }
// }

// let answer = RGB7007(476);
// console.log("Answer:", answer);

// function RGB7008(num) {
//   let secondNum;
//   {
//     return (secondNum = ((num % 100) - (num % 10)) / 10);
//   }
// }

// let result = RGB7008(423);
// console.log(result);

// function RGB7009(num) {
//   return ((num % 10) * (num - (num % 10))) / 10;
// }

// let Answer = RGB7009(27);
// console.log("Answer:", Answer);

// function RGB7010(num) {
//   let last = num % 10;
//   let second = ((num - (num % 10)) / 10) % 10;
//   let first = (num - (num % 100)) / 100;
//   return last + second + first;
// }

// let Answer = RGB7010(123);
// console.log(Answer);

// function RGB7011(num) {
//   let second = num % 60;
//   let min = (num - second) / 60;
//   console.log(min, second);
// }
// RGB7011(200);

// function login(user, pass) {
//     if(user=="dashaa" && pass=="123123") return "true"
//     else return "false"
// }

// let answer = login("dashaa", "123123")
// console.log(answer)

// function RGB7012(num) {
//   let second = num % 60;
//   let min = (num - (num - (num % 3600)) - second) / 60;
//   let hour = (num - (num % 3600)) / 3600;

//   console.log(hour, min, second);
// }
// RGB7012(3612);

// function RGB7013(min, sec) {
//   return min * 60 + sec;
// }
// let Answer = RGB7013(3, 4);
// console.log("Seconds:", Answer);

// function RGB7014(hrs, min, sec) {
//   return hrs * 3600 + min * 60 + sec;
// }
// let Answer = RGB7014(1, 2, 3);
// console.log("Seconds:", Answer);

// function RGB7015(hrs) {
//   let hours = hrs % 24;
//   let days = (hrs - (hrs % 24)) / 24;
//   console.log(days, hours);
// }
// RGB7015(44);

// function RGB7101(num1, num2) {
//   if (num1 > num2) return num1;
//   else return num2;
// }

// let answer = RGB7101(16, 14);
// console.log(answer);

// function RGB7102(num1, num2) {
//   if (num1 < num2) return num1;
//   else return num2;
// }

// let answer = RGB7102(9, 6);
// console.log(answer);

// function RGB7103(num1, num2, num3) {
//   if (num1 > num2 && num1 > num3 && num1) return num1;
//   if (num2 > num1 && num2 > num3 && num2) return num2;
//   if (num3 > num2 && num3 > num1 && num3) return num3;
// }

// let answer = RGB7103(1, 3, 2);
// console.log(answer);

// function RGB7104(num1, num2, num3, num4) {
//   if (num1 < num2 && num1 < num3 && num1 < num4) return num1;
//   if (num2 < num1 && num2 < num3 && num2 < num4) return num2;
//   if (num3 < num2 && num3 < num1 && num3 < num4) return num3;
//   if (num4 < num2 && num4 < num3 && num4 < num1) return num4;
// }

// let answer = RGB7104(3, 2, 1, 4);
// console.log(answer);

// function RGB7105(num1, num2, num3, num4) {
//   if (num1 < 80) num1 = 0;
//   if (num2 < 80) num2 = 0;
//   if (num3 < 80) num3 = 0;
//   if (num4 < 80) num4 = 0;
//   return num1 + num2 + num3 + num4;
// }

// let answer = RGB7105(85, 75, 96, 69);
// console.log("Answer:", answer);

// function RGB7106(num1, num2, num3, num4) {
//   if (num1 > 5) num1 = 1;
//   if (num2 > 5) num2 = 1;
//   if (num3 > 5) num3 = 1;
//   if (num4 > 5) num4 = 1;
//   return num1 * num2 * num3 * num4;
// }

// let Answer = RGB7106(3, 6, 2, 4);
// console.log("Answer:", Answer);

// function RGB7107(num1, num2, num3) {
//   if (num1 % 2 > 0) num1 = 0;
//   if (num2 % 2 > 0) num2 = 0;
//   if (num3 % 2 > 0) num3 = 0;
//   return num1 + num2 + num3;
// }

// let Answer = RGB7107(10, 3, 5);
// console.log("Answer:", Answer);

// function RGB7108(num1, num2, num3) {
//   if (num1 % 2 == 0) num1 = 1;
//   if (num2 % 2 == 0) num2 = 1;
//   if (num3 % 2 == 0) num3 = 1;
//   return num1 * num2 * num3;
// }

// let Answer = RGB7108(5, 2, 3);
// console.log("Answer:", Answer);

// function RGB7109(num1, num2, num3) {
//   let approved1 = num1 == 5;
//   let apporved2 = num2 == 5;
//   let approved3 = num3 == 5;
//   return approved1 + apporved2 + approved3;
// }

// let Answer = RGB7109(2, 5, 5);
// console.log("Answer:", Answer);

// function RGB7110(num1, num2, num3, num4) {
//   let approved1 = num1 % 3 == 0;
//   let apporved2 = num2 % 3 == 0;
//   let approved3 = num3 % 3 == 0;
//   let approved4 = num4 % 3 == 0;
//   return approved1 + apporved2 + approved3 + approved4;
// }

// let Answer = RGB7111(3, 12, 8, 9);
// console.log("Answer:", Answer);

// function RGB7112(num1, num2, num3, num4) {
//   if (num1 % 11 == 0) num1 = 0;
//   if (num2 % 11 == 0) num2 = 0;
//   if (num3 % 11 == 0) num3 = 0;
//   if (num4 % 11 == 0) num4 = 0;
//   return num1 + num2 + num3 + num4;
// }

// let Answer = RGB7112(7, 22, 13, 30);
// console.log("Answer:", Answer);

// function RGB7113(num) {
//   if (num > 10) return "YES";
//   else return "No";
// }

// let Answer = RGB7113(11);
// console.log("Answer:", Answer);
