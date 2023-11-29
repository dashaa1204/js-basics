// let firstName = "dashaa";
// let myAge = 30;
// console.log(firstName);
// console.log(myAge);

// let num1 = 10;
// let num2 = 20;

// console.log(num1 + num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 - num2);

// let sum = num1 + num2;
// let product = num1 * num2;
// let division = num1 / num2;
// let subtraction = num1 - num2;

// //y = x*x + 2*x +1;
// let x = 5;
// let answer = x * x + 2 * x + 1;
// console.log(answer);

// let number1 = 10;
// let number2 = 20;

// console.log(number1 + number2);

// let x = 15;
// let y = 20;
// if (x > y) {
//   console.log("x is bigger");
// } else {
//   console.log("y is bigger");
// }

// let myAge = 30;
// if (myAge < 21) {
//   console.log("no bar");
// } else {
//   console.log("bar or");
// }

// let myBirthYear = 1666;
// let Age = 2023 - myBirthYear;

// console.log(Age);

// let myAge = 16;
// if (myAge < 18) {
//   console.log("you are not allowed to drive");
// } else {
//   console.log("you are allowed to drive");
// }

// let myAge = 30;
// console.log("my age =", myAge);

// Data type

// let number1 = 15; //numbertype
// let myString = "15"; //string type
// let myBool = false; //boolean type

// let day = 9;
// if (day == 1) {
//   console.log("Monday");
// } else if (day == 2) {
//   console.log("Tuesday");
// } else if (day == 3) {
//   console.log("Wednesday");
// } else if (day == 4) {
//   console.log("Thursday");
// } else if (day == 5) {
//   console.log("Friday");
// } else if (day == 6) {
//   console.log("Saturday");
// } else if (day == 7) {
//   console.log("Sunday");
// } else console.log("Error 404");

// let days = 333;
// if (days < 32) {
//   console.log("January");
// } else if (days < 60) {
//   console.log("February");
// } else if (days < 91) {
//   console.log("March");
// } else if (days < 121) {
//   console.log("April");
// } else if (days < 152) {
//   console.log("May");
// } else if (days < 182) {
//   console.log("June");
// } else if (days < 213) {
//   console.log("July");
// } else if (days < 243) {
//   console.log("August");
// } else if (days < 274) {
//   console.log("September");
// } else if (days < 305) {
//   console.log("Octeber");
// } else if (days < 335) {
//   console.log("November");
// } else if (days < 366) {
//   console.log("December");
// } else console.log("Error");

// let midterm1 = 100;
// let midterm2 = 100;
// let final = 100;
// if ((midterm1 + midterm2 + final) / 3 < 60) {
//   console.log("F");
// } else if ((midterm1 + midterm2 + final) / 3 < 70) {
//   console.log("D");
// } else if ((midterm1 + midterm2 + final) / 3 < 80) {
//   console.log("C");
// } else if ((midterm1 + midterm2 + final) / 3 < 101) {
//   console.log("A");
// } else console.log("Error");

// let midterm1 = 100;
// let midterm2 = 70;
// let final = 100;
// if (((midterm1 + midterm2) / 2 + final) / 2 < 60) {
//   console.log("F");
// } else if (((midterm1 + midterm2) / 2 + final) / 2 < 70) {
//   console.log("D");
// } else if (((midterm1 + midterm2) / 2 + final) / 2 < 80) {
//   console.log("C");
// } else if (((midterm1 + midterm2) / 2 + final) / 2 < 90) {
//   console.log("B");
// } else if (((midterm1 + midterm2) / 2 + final) / 2 < 101) {
//   console.log("A");
// } else console.log("Error");

// function doSomething(input) {
//   return input * input;
// }

// let result = doSomething(15);

// function findDay(num) {
//   if (num <= 31) return "January";
//   else if (num <= 31 + 28) return "February";
//   else if (num <= 31 + 28 + 31) return "March";
//   else if (num <= 31 + 28 + 31 + 30) return "April";
//   else if (num <= 31 + 28 + 31 + 30 + 31) return "May";
//   else if (num <= 31 + 28 + 31 + 30 + 31 + 30) return "June";
//   else if (num <= 31 + 28 + 31 + 30 + 31 + 30 + 31) return "July";
//   else if (num <= 31 + 28 + 31 + 30 + 31 + 30 + 31 + 30) return "August";
//   else if (num <= 31 + 28 + 31 + 30 + 31 + 30 + 31 + 30 + 31)
//     return "September";
//   else if (num <= 31 + 28 + 31 + 30 + 31 + 30 + 31 + 30 + 31 + 30)
//     return "Octeber";
//   else if (num <= 31 + 28 + 31 + 30 + 31 + 30 + 31 + 30 + 31 + 30 + 31)
//     return "November";
//   else if (num <= 31 + 28 + 31 + 30 + 31 + 30 + 31 + 30 + 31 + 30 + 31 + 30)
//     return "December";
// }

// let Month = findDay(360);
// console.log(Month);

// function avgGrade(mid1, mid2, final) {
//   if ((mid1 + mid2 + final) / 3 < 60) return "F";
//   else if ((mid1 + mid2 + final) / 3 < 70) return "D";
//   else if ((mid1 + mid2 + final) / 3 < 80) return "C";
//   else if ((mid1 + mid2 + final) / 3 < 90) return "B";
//   else if ((mid1 + mid2 + final) / 3 < 101) return "A";
//   else return "Error";
// }

// let finalGrade = avgGrade(100, 80, 50);
// console.log(finalGrade);
