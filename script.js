// // 1) Function declaratioin
// function calcAge(birthyear) {
//   return 2022 - birthyear;
// }
// const consoleAge = calcAge(1978);
// console.log(consoleAge);

// // 2) Function expression =
// const calcAgeDecl = function (birthyear) {
//   return 2022 - birthyear;
// };
// const consoleAgeDecl = calcAgeDecl(1983);
// console.log(consoleAgeDecl);

// // 3) Function arrow =>
// const calcAgeArrow = (birthyear) => 2022 - birthyear;
// console.log(calcAgeArrow(2011));

/////////////////////////
// JS course coding chalanges:
// // Fundamental Part One, Coding Chalange #1, #2:
// // Test data:
// // const heightMark = 1.69;
// // const weightMark = 78;
// // const heightJohn = 1.95;
// // const weightJohn = 92;
// const heightMark = 1.88;
// const weightMark = 95;
// const heightJohn = 1.76;
// const weightJohn = 85;

// const BMI = function (mass, height) {
//   return (mass / height ** 2).toFixed(2);
// };

// const BMIMark = BMI(weightMark, heightMark);
// const BMIJohn = BMI(weightJohn, heightJohn);
// console.log(BMIMark);
// console.log(BMIJohn);

// const higherBMI =
//   BMIMark > BMIJohn ? `Mark's BMI: (${BMIMark})` : `John's BMI: (${BMIJohn})`;
// console.log(`${higherBMI} is higher`);

// // Fundamental Part One, Coding Chalange #3
// // Test data:
// // const dolphinsScores = [96, 108, 89];
// // const koalasScores = [88, 91, 110];
// const dolphinsScores = [97, 112, 101];
// const koalasScores = [159, 95, 106];

// const calcAvrgScore = function (scores) {
//   const sumScores = scores.reduce((prev, curr) => prev + curr);
//   return (sumScores / scores.length).toFixed(2);
// };

// const dolphinsAvrgScore = calcAvrgScore(dolphinsScores);
// const koalasAvrgScore = calcAvrgScore(koalasScores);

// if (dolphinsAvrgScore >= 100 && koalasAvrgScore >= 100) {
//   if (dolphinsAvrgScore > koalasAvrgScore) {
//     console.log(
//       `Dolphins won ${dolphinsAvrgScore} to ${koalasAvrgScore} against koalas.`
//     );
//   } else if (dolphinsAvrgScore < koalasAvrgScore) {
//     console.log(
//       `Koalas won ${koalasAvrgScore} to ${dolphinsAvrgScore} against dolphins.`
//     );
//   } else {
//     console.log(`It's a draw: ${koalasAvrgScore} to ${dolphinsAvrgScore}.`);
//   }
// }

// // Fundamental Part One, Coding Chalange #4
// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const output = `The bill was ${bill}, the tip was ${tip}, and the total value ${
//   bill + tip
// }`;

// console.log(output);

// // Fundamental Part Two, Coding Chalange #1:
// Test data:
// const dolphinsScores = [96, 108, 89];
// const koalasScores = [88, 91, 110];
// const dolphinsScores = [85, 54, 71];
// const koalasScores = [23, 34, 27];

// const calcAvrgScore = function (scores) {
//   const sumScores = scores.reduce((prev, curr) => prev + curr);
//   return (sumScores / scores.length).toFixed(2);
// };

// const dolphinsAvrgScore = calcAvrgScore(dolphinsScores);
// const koalasAvrgScore = calcAvrgScore(koalasScores);

// const checkWinner = function () {
//   if (dolphinsAvrgScore >= 2 * koalasAvrgScore) {
//     console.log(
//       `Dolphins won ${dolphinsAvrgScore} vs. ${koalasAvrgScore} against koalas.`
//     );
//   } else if (koalasAvrgScore >= 2 * dolphinsAvrgScore) {
//     console.log(
//       `Koalas won ${koalasAvrgScore} vs. ${dolphinsAvrgScore} against dolphins.`
//     );
//   } else {
//     console.log('No team wins...');
//   }
// };
// checkWinner();

// // Fundamental Part Two, Coding Chalange #2:
// const bills = [125, 555, 44];
// const tips = [];
// const totals = [];

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// bills.forEach(function (bill, tip) {
//   tip = calcTip(bill);
//   tips.push(tip);
//   totals.push(bill + tip);
// });
// console.log(bills);
// console.log(tips);
// console.log(totals);

// // Fundamental Part Two, Coding Chalange #3:
// const objMark = {
//   fullName: 'Mark',
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const objJohn = {
//   fullName: 'John',
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// objMark.calcBMI();
// objJohn.calcBMI();
// //console.log(objMark.bmi, objJohn.bmi);

// if (objMark.bmi > objJohn.bmi)
//   console.log(
//     `${objMark.fullName}'s BMI (${objMark
//       .calcBMI()
//       .toFixed(2)}) is higher than ${objJohn.fullName}'s (${objJohn
//       .calcBMI()
//       .toFixed(2)})!`
//   );

// if (objMark.bmi < objJohn.bmi)
//   console.log(
//     `${objJohn.fullName}'s BMI (${objJohn
//       .calcBMI()
//       .toFixed(2)}) is higher than ${objMark.fullName}'s (${objMark
//       .calcBMI()
//       .toFixed(2)})!`
//   );

// // Fundamental Part Two, Coding Chalange #4:
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

bills.forEach(function (bill, tip) {
  tip = calcTip(bill);
  tips.push(tip);
  totals.push(bill + tip);
});

const calcAvrg = function (arr) {
  const avr = arr.reduce((prev, curr) => prev + curr) / arr.length;
  return avr;
};
console.log('Total bills, tips, and totals:');
console.log(bills);
console.log(tips);
console.log(totals);
console.log('Average bills, tips, and totals:');
console.log(calcAvrg(bills));
console.log(calcAvrg(tips));
console.log(calcAvrg(totals));
