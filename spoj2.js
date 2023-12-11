// function RGB7205(num) {
//   let sum = 1;
//   for (let i = 1; i <= num; i = i + 1) {
//     sum = sum * i;
//   }
//   console.log(sum);
// }

// let answer = RGB7205(5);

// function RGB7206(n) {
//   let sum = 0;
//   for (let i = 0; i < n; i = i + 1) {
//     sum = sum + 100;
//   }
//   console.log(sum);
// }

// RGB7206(6);

// function RGB7207(num, n) {
//   let sum = 0;
//   let a = num;
//   for (let i = 0; i < n; i = i + 1) {
//     sum = sum + a;
//   }
//   console.log(sum);
// }

// RGB7207(50, 6);

// function RGB7208(n) {
//   result = 1;
//   for (let i = 0; i < n; i = i + 1) {
//     result = result * 2;
//   }
//   console.log(result);
// }

// RGB7208(5);

// function RGB7115(num) {
//   if (num < 3) {
//     console.log("pass");
//   } else console.log("fail");
// }

// RGB7115(2);

// function RGB7116(num) {
//   if (num == 2) {
//     console.log("muu");
//   } else if (num == 3) {
//     console.log("dund");
//   } else if (num == 4) {
//     console.log("sain");
//   } else if (num == 5) {
//     console.log("onts");
//   }
// }

// RGB7116(5);

// function RGB7117(num) {
//   if (num > 89) {
//     console.log("A");
//   } else if (num > 79) {
//     console.log("B");
//   } else if (num > 69) {
//     console.log("C");
//   } else if (num > 59) {
//     console.log("D");
//   } else console.log("F");
// }

// RGB7117(33);

// function RGB7118(num) {
//   if (num == 1) {
//     console.log("Monday");
//   } else if (num == 2) {
//     console.log("Tuesday");
//   } else if (num == 3) {
//     console.log("Wednesday");
//   } else if (num == 4) {
//     console.log("Thursday");
//   } else if (num == 5) {
//     console.log("Friday");
//   } else if (num == 6) {
//     console.log("Sutarday");
//   } else if (num == 7) {
//     console.log("Sunday");
//   } else console.log("Error");
// }

// RGB7118(2);

// function RGB7119(num) {
//   if (num >= 1 && num <= 12) {
//     if (num == 11 || num == 12 || num == 1) {
//       console.log("Winter");
//     } else if (num == 2 || num == 3 || num == 4) {
//       console.log("Spring");
//     } else if (num == 5 || num == 6 || num == 7) {
//       console.log("Summer");
//     } else if (num == 8 || num == 9 || num == 10) {
//       console.log("Autumn");
//     }
//   }
// }

// RGB7119(3);

// function RGB7120(num1, num2, num3) {
//   if (num1 + num2 > num3 && num2 + num3 > num1 && num3 + num1 > num2) {
//     console.log("Yes");
//   } else console.log("No");
// }

// RGB7120(3, 4, 5);

// function RGB7210(num) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(num + "*" + i + "=" + num * i);
//   }
// }

// RGB7210(10);

// function RGB7211(num, n) {
//   let d = 1;
//   for (let i = 1; i <= n; i++) {
//     d = d * num;
//     console.log(num + "^" + i + "=" + d);
//   }
// }

// RGB7211(3, 5);

// function RGB7019(num1, num2, num3) {
//   let x;
//   x = num1 * num2 - num3;
//   return x;
// }

// let answer = RGB7019(2, 3, 4);
// console.log(answer);

// function RGB7170(mFloor, doorPerF, dnum) {
//   let floor = dnum / doorPerF;
//   let doornum = dnum % doorPerF;
//   if (mFloor * doorPerF >= dnum) {
//     if (floor % 1 > 0) {
//       floor = floor - (dnum % doorPerF) / doorPerF + 1;
//     }
//     if (doornum == 0) {
//       doornum = doorPerF;
//     }
//   }

//   console.log(floor, doornum);
// }

// RGB7170(5, 4, 1);


