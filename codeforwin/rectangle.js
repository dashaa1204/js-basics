function drawSqr(size) {
  let sqrStr = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      sqrStr += "*";
    }
    sqrStr += "\n";
  }
  console.log(sqrStr);
}

drawSqr(5);

function hollowSqr(size) {
  let sqrStr = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i == 0 || i == size - 1 || j == 0 || j == size - 1) {
        sqrStr += "*";
      } else {
        sqrStr += " ";
      }
    }
    sqrStr += "\n";
  }
  console.log(sqrStr);
}

hollowSqr(60);

let text = `Trade-in values will vary based on the condition year and configuration of your eligible trade-in device. 
  Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. 
  Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. 
  Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. 
  Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). 
  Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. 
  Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. 
  More details are available from Apples trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.`;
let count = 0;
let alphabets = `abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`;
// let abcArray = [];
for (let i = 0; i < alphabets.length; i++) {
  if (text.charAt(i) == alphabets.charAt(i)) {
    count++;
  } else {
    count++;
  }
}

console.log(count);

// let alphabets = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let abcArray = [];
// let count1 = 0;
// for (i = 0; i < text.length; i++) {
//   for (i = 0; i < "\n"; i++) {
//     for (i = 0; i < " "; i++) {
//       if (text.charAt(i) == alphabets) {
//         text = abcArray;
//       }
//     }
//     count1++;
//   }
// }

// console.log(count1);
