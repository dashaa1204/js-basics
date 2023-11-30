let city = [
  "Toronto",
  "Sidney",
  "London",
  "NewYork",
  "Ulaanbaatar",
  "Mexico",
  "Dubai",
  "Amsterdam",
];

console.log(city[0]);
console.log(city[1]);
console.log(city[2]);
console.log(city[3]);
console.log(city[4]);
console.log(city[5]);
console.log(city[6]);
console.log(city[7]);

let usa = {
  california: {
    sacarmento: 31231321,
    Losangeles: 321897321871,
  },
  texas: { houston: 218371289, dallas: 281311 },
  newyork: { miami: 2318312, tallahasee: 213123 },
  pennsylvania: { newyork: 312231, albany: 213123 },
  illinois: { chicago: 312312 },
  ohio: { cleavland: 231321, columbus: 2311321 },
  georgia: 42342432,
  northcalifornia: 4234423,
  michigan: 43242423,
  newjersey: 4324322,
  virginia: 432432,
  washington: 42342,
  arizano: 423423,
  tennesee: 432423,
  massachusetts: 4324234,
};

console.log(usa);

// function zeel(salary, ndsh, passport, person, dept) {
//   if (
//     salary > 2000000,
//     ndsh = true
//     person = "inperson" && "credintial"
//     passport = "passport" && "identification"
//     dept < 1000000;

//     return "approved";
//   else return "refused";
// }

// let answer = zeel(25000000, true, "inperson", "passport", 5);
// console.log(answer);

function zeel(salary, ndsh, passport, person, dept) {
  if (
    salary > 2000000 &&
    ndsh == true &&
    (person == "inperson" || "creditial") &&
    (passport == "passport" || "id") &&
    dept < 1000000
  )
    return "approve";
  else return "refuse";
}

let answer = zeel(2500000, true, "inperson", "passport", 1100000);
console.log(answer);
